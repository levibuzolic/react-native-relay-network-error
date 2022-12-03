/**
 * @generated SignedSource<<00e2966373799e663b78a08c69822ac5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Query$variables = {};
export type Query$data = {
  readonly " $fragmentSpreads": FragmentRefs<"Query_query">;
};
export type Query = {
  response: Query$data;
  variables: Query$variables;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "Query",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "Query_query"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "Query",
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
            "name": "name",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "590a811dd22fad76c943012dd0af2e01",
    "id": null,
    "metadata": {},
    "name": "Query",
    "operationKind": "query",
    "text": "query Query {\n  ...Query_query\n}\n\nfragment Query_query on Query {\n  product {\n    name\n  }\n}\n"
  }
};

(node as any).hash = "536c4b11760b11a8d21b33cffc7fc963";

export default node;
