/**
 * @generated SignedSource<<b3011daaf25f93f6365380461e140963>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, GraphQLSubscription } from 'relay-runtime';
export type MeshSyncEventsSubscription$variables = {|
  k8scontextIDs?: ?$ReadOnlyArray<string>,
|};
export type MeshSyncEventsSubscription$data = {|
  +meshsyncevents: {|
    +type: string,
    +object: any,
    +contextId: string,
  |},
|};
export type MeshSyncEventsSubscription = {|
  variables: MeshSyncEventsSubscription$variables,
  response: MeshSyncEventsSubscription$data,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "k8scontextIDs"
  }
],
v1 = [
  {
    "alias": "meshsyncevents",
    "args": [
      {
        "kind": "Variable",
        "name": "k8scontextIDs",
        "variableName": "k8scontextIDs"
      }
    ],
    "concreteType": "MeshSyncEvent",
    "kind": "LinkedField",
    "name": "subscribeMeshSyncEvents",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "type",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "object",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "contextId",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "MeshSyncEventsSubscription",
    "selections": (v1/*: any*/),
    "type": "Subscription",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "MeshSyncEventsSubscription",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "c8d361708120a8bd2d53fa7d729389da",
    "id": null,
    "metadata": {},
    "name": "MeshSyncEventsSubscription",
    "operationKind": "subscription",
    "text": "subscription MeshSyncEventsSubscription(\n  $k8scontextIDs: [String!]\n) {\n  meshsyncevents: subscribeMeshSyncEvents(k8scontextIDs: $k8scontextIDs) {\n    type\n    object\n    contextId\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "bb175879d0d8929cbeb1f5809b51413e";

module.exports = ((node/*: any*/)/*: GraphQLSubscription<
  MeshSyncEventsSubscription$variables,
  MeshSyncEventsSubscription$data,
>*/);