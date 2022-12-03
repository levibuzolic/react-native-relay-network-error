/**
 * @generated SignedSource<<cf978add603b50284ca6b52b56bc6402>>
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
        "args": [
          {
            "kind": "Literal",
            "name": "id",
            "value": "LazyQuery"
          }
        ],
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
        "storageKey": "product(id:\"LazyQuery\")"
      }
    ]
  },
  "params": {
    "cacheID": "b177a2e9b205510c3a13fec25702c51f",
    "id": null,
    "metadata": {},
    "name": "LazyQueryQuery",
    "operationKind": "query",
    "text": "query LazyQueryQuery {\n  ...LazyQuery_query\n}\n\nfragment LazyQuery_query on Query {\n  product(id: \"LazyQuery\") {\n    id\n    name\n  }\n}\n"
  }
};

(node as any).hash = "13522a9026fe647b76d5ed20a4d7754f";

export default node;
