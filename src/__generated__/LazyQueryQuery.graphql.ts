/**
 * @generated SignedSource<<003379e2b29beffe8ffaf58eaf084a12>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type LazyQueryQuery$variables = {};
export type LazyQueryQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"LazyQuery_query">;
};
export type LazyQueryQuery = {
  response: LazyQueryQuery$data;
  variables: LazyQueryQuery$variables;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "LazyQueryQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "LazyQuery_query"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "LazyQueryQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "email",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "023d600bb737017d5debc4441732b561",
    "id": null,
    "metadata": {},
    "name": "LazyQueryQuery",
    "operationKind": "query",
    "text": "query LazyQueryQuery {\n  ...LazyQuery_query\n}\n\nfragment LazyQuery_query on Query {\n  user {\n    id\n    name\n    email\n  }\n}\n"
  }
};

(node as any).hash = "13522a9026fe647b76d5ed20a4d7754f";

export default node;
