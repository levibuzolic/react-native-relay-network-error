/**
 * @generated SignedSource<<c849fb84e19c69dfda97d44f2f800387>>
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
        "args": null,
        "concreteType": "Address",
        "kind": "LinkedField",
        "name": "address",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "streetNumber",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "streetName",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "city",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "state",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "country",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "28d7cfdb1f3575eee1795e30211ed644",
    "id": null,
    "metadata": {},
    "name": "LazyNetworkOnlyQueryWithErrorQuery",
    "operationKind": "query",
    "text": "query LazyNetworkOnlyQueryWithErrorQuery {\n  ...LazyNetworkOnlyQueryWithError_query\n}\n\nfragment LazyNetworkOnlyQueryWithError_query on Query {\n  address {\n    streetNumber\n    streetName\n    city\n    state\n    country\n  }\n}\n"
  }
};

(node as any).hash = "386ffe426f179ccf1e7b810ecb359e76";

export default node;
