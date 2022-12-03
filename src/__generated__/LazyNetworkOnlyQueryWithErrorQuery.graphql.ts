/**
 * @generated SignedSource<<9413883cff7d914d0affada8e10d41e3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type LazyNetworkOnlyQueryWithErrorQuery$variables = {};
export type LazyNetworkOnlyQueryWithErrorQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"LazyNetworkOnlyQueryWithError_query">;
};
export type LazyNetworkOnlyQueryWithErrorQuery = {
  response: LazyNetworkOnlyQueryWithErrorQuery$data;
  variables: LazyNetworkOnlyQueryWithErrorQuery$variables;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "LazyNetworkOnlyQueryWithErrorQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "LazyNetworkOnlyQueryWithError_query"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "LazyNetworkOnlyQueryWithErrorQuery",
    "selections": [
      {
        "alias": null,
        "args": [
          {
            "kind": "Literal",
            "name": "id",
            "value": "LazyNetworkOnlyQueryWithError"
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
        "storageKey": "product(id:\"LazyNetworkOnlyQueryWithError\")"
      }
    ]
  },
  "params": {
    "cacheID": "6490296a9036073ad46432369c070bbe",
    "id": null,
    "metadata": {},
    "name": "LazyNetworkOnlyQueryWithErrorQuery",
    "operationKind": "query",
    "text": "query LazyNetworkOnlyQueryWithErrorQuery {\n  ...LazyNetworkOnlyQueryWithError_query\n}\n\nfragment LazyNetworkOnlyQueryWithError_query on Query {\n  product(id: \"LazyNetworkOnlyQueryWithError\") {\n    id\n    name\n  }\n}\n"
  }
};

(node as any).hash = "386ffe426f179ccf1e7b810ecb359e76";

export default node;
