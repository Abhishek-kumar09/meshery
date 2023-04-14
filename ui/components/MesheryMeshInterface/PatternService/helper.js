import _ from "lodash";


function deleteTitleFromJSONSchema(jsonSchema) {
  return { ...jsonSchema, title : "" };
}

function deleteDescriptionFromJSONSchema(jsonSchema) {
  return { ...jsonSchema, description : "" }
}

/**
 * remove top-level title, top-level description and
 * handle non-RJSF compliant fields
 *
 * @param {Object.<String, Object>} jsonSchema
 * @returns
 */
export function getRefinedJsonSchema(jsonSchema, hideTitle = true, handleError) {
  let refinedSchema;
  try {
    refinedSchema = hideTitle ? deleteTitleFromJSONSchema(jsonSchema) : jsonSchema
    refinedSchema = deleteDescriptionFromJSONSchema(refinedSchema)
    recursivelyParseJsonAndCheckForNonRJSFCompliantFields(refinedSchema);
  } catch (e) {
    console.trace(e)
    handleError(e, "schema parsing problem")
  }
  return refinedSchema
}

/**
 * Check if the exsxceptional type fields are present in the schema
 * returns false if any of the exceptional-fields are not present else
 * returns the type of the exceptional-field
 *
 * @see https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/#specifying-a-structural-schema
 */
function getXKubenetesToRJSFCompatibleFieldType(schema) {
  // todo: add more
  const xKubernetesIntOrString = 'x-kubernetes-int-or-string';
  const xKubernetesPreserveUnknownFields = 'x-kubernetes-preserve-unknown-fields';

  const exceptionalFieldToTypeMap = {
    [xKubernetesIntOrString] : 'string', // string can hold integers too
    [xKubernetesPreserveUnknownFields] : schema?.type || 'object',
  }

  let returnedType;

  Object.keys(exceptionalFieldToTypeMap).some(field => {
    if (Object.prototype.hasOwnProperty.call(schema, field)) {
      returnedType = exceptionalFieldToTypeMap[field];
      if (field.startsWith("x-kubernetes") && !returnedType) {
        // case where the above map is not enough to detect the correct alternate type, fallback to "object" in that case
        returnedType = "object"
      }
      return true;
    }
  })

  return returnedType || false;
}

/**
 * An inline object mutating function that could detect and handle the
 * exceptional kubernetes field that are not valid RJSF constructs
 *
 * @param {Object} jsonSchema
 * @returns
 */
function recursivelyParseJsonAndCheckForNonRJSFCompliantFields(jsonSchema) {
  if (!jsonSchema || _.isEmpty(jsonSchema)) {
    return;
  }

  if (jsonSchema.type === "object" && jsonSchema.additionalProperties) {
    recursivelyParseJsonAndCheckForNonRJSFCompliantFields(jsonSchema.additionalProperties);
  }

  if (jsonSchema.type === "object") {
    const properties = jsonSchema.properties;

    properties && Object.keys(properties).forEach(key => {
      recursivelyParseJsonAndCheckForNonRJSFCompliantFields(properties[key]);
    })
  }

  if (jsonSchema.type === "array") {
    const items = jsonSchema.items;
    items && recursivelyParseJsonAndCheckForNonRJSFCompliantFields(items)
  }

  // 1. Handling the special kubernetes types
  const rjsfFieldType = getXKubenetesToRJSFCompatibleFieldType(jsonSchema);
  if (rjsfFieldType) {
    jsonSchema.type = rjsfFieldType; // Mutating original object by adding a valid type field
  }

  return jsonSchema;
}
