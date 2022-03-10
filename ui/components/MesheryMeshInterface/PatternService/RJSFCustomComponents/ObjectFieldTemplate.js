import { Box, Button, IconButton, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import AddButton from "@material-ui/icons/Add";
import { makeStyles } from '@material-ui/styles';
import { utils } from '@rjsf/core';
import React, { useEffect, useRef } from 'react';
import "tippy.js/animations/scale-extreme.css";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light-border.css";
import EnlargedTextTooltip from '../EnlargedTextTooltip';
import HelpOutlineIcon from '../HelpOutlineIcon';
import TippyComponent, { createTippy } from '../../TippyComponent';

const { canExpand } = utils;

export function getObjectInfo(objId) {
  const nestedChildren = objId.split("_");
  const nestingLevel = nestedChildren.length;
  let isDirectArrayChild = false;
  if (nestingLevel > 1 && !isNaN(nestedChildren[nestingLevel - 1])) {
    isDirectArrayChild = true;
  }

  console.log(objId, { nestingLevel, isDirectArrayChild })
  return { nestingLevel, isDirectArrayChild };
}

const useStyles = makeStyles({
  root : {
    marginTop : 10,
    // paddingLeft: "0.6rem",
    padding : "0.6rem",
    border : '1px solid rgba(0, 0, 0, .125)',
  },
});

const ObjectFieldTemplate = ({
  description,
  title,
  properties,
  required,
  disabled,
  readonly,
  uiSchema,
  idSchema,
  schema,
  formData,
  onAddClick,
  ...other
}) => {
  const classes = useStyles();

  useEffect(() => {
    console.log(formData)
  }, [formData])

  const CustomTitleField = ({ title }) => (
    <Box mb={1} mt={1}>
      <Grid container justify="space-between" alignItems="center">
        <Grid item mb={1} mt={1}>
          <Typography variant="body1" style={{ fontWeight : "bold", display : "inline" }}>{title.charAt(0).toUpperCase() + title.slice(1)}{" "}</Typography>
          {description &&
            <EnlargedTextTooltip title={description}>
              <HelpOutlineIcon />
            </EnlargedTextTooltip>}
        </Grid>

        {canExpand(schema, uiSchema, formData) && (
          <Grid item={true}>
            <IconButton
              className="object-property-expand"
              onClick={onAddClick(schema)}
              disabled={disabled || readonly}
            >
              <AddButton />
            </IconButton>
          </Grid>
        )}
      </Grid>

    </Box>
  );

  const TitleComponent = (
    <>
      {(uiSchema['ui:title'] || title) && (
        <CustomTitleField
          id={`${idSchema.$id}-title`}
          title={title}
          description={description}
          required={required}
        />
      )}
    </>
  )

  const ExtendedComponent = (
    <>
      {properties.map((element, index) => {
        // console.log("eke", element)
        // Remove the <Grid> if the inner element is hidden as the <Grid>
        // itself would otherwise still take up space.
        return (
          element.hidden ? (
            element.content
          ) : (
            <Grid
              item={true}
              xs={element.name === "name" || element.name === "namespace" ? 6 : 12}
              key={index}
            >
              {element.content}
            </Grid>
          )
        );
      })}
    </>
  )

  const { nestingLevel, isDirectArrayChild } = getObjectInfo(idSchema['$id']);
  if (nestingLevel === 3 && !isDirectArrayChild) {
    return (
      <TippyComponent
        title={title}
        content={
          <Grid container={true} spacing={2} className={classes.root} style={Object.keys(properties).length === 0 || schema["$schema"] ? { border : "none" } : null}>
            {ExtendedComponent}
          </Grid>}
        style={{ backgroundColor : "#fff" }}
      >
        {TitleComponent}
      </TippyComponent>
    );
  }

  if (isDirectArrayChild) {
    return <>
      {TitleComponent}{ExtendedComponent}
    </>
  }

  return (
    <>
      {TitleComponent}
      <Grid container={true} spacing={2} className={classes.root} style={Object.keys(properties).length === 0 || schema["$schema"] ? { border : "none" } : null}>
        {ExtendedComponent}
      </Grid>
    </>
  );
};

export default ObjectFieldTemplate;
