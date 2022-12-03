/**
 * @generated SignedSource<<0bcde5fecdd19f8c623c79b76d95d92c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type LazyQueryWithErrorQuery$variables = {};
export type LazyQueryWithErrorQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"LazyQueryWithError_query">;
};
export type LazyQueryWithErrorQuery = {
  response: LazyQueryWithErrorQuery$data;
  variables: LazyQueryWithErrorQuery$variables;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "LazyQueryWithErrorQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "LazyQueryWithError_query"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "LazyQueryWithErrorQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Product",
        "kind": "LinkedField",
        "name": "product",
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
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "ad1070a34199ec3a2a1dccb223ffdf97",
    "id": null,
    "metadata": {},
    "name": "LazyQueryWithErrorQuery",
    "operationKind": "query",
    "text": "query LazyQueryWithErrorQuery {\n  ...LazyQueryWithError_query\n}\n\nfragment LazyQueryWithError_query on Query {\n  product {\n    id\n    name\n  }\n}\n"
  }
};

(node as any).hash = "bbaecf31016dd312c419d759834f9df4";

export default node;
