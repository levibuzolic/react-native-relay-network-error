/**
 * @generated SignedSource<<a40bc388b5472407668d60d526db142d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type LazyQueryNoFragmentWithErrorQuery$variables = {};
export type LazyQueryNoFragmentWithErrorQuery$data = {
  readonly product: {
    readonly id: string;
    readonly name: string;
  };
};
export type LazyQueryNoFragmentWithErrorQuery = {
  response: LazyQueryNoFragmentWithErrorQuery$data;
  variables: LazyQueryNoFragmentWithErrorQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "id",
        "value": "LazyQueryNoFragmentWithErrorQuery"
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
    "storageKey": "product(id:\"LazyQueryNoFragmentWithErrorQuery\")"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "LazyQueryNoFragmentWithErrorQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "LazyQueryNoFragmentWithErrorQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "7dca804691afcb72cdf67ec3d865220e",
    "id": null,
    "metadata": {},
    "name": "LazyQueryNoFragmentWithErrorQuery",
    "operationKind": "query",
    "text": "query LazyQueryNoFragmentWithErrorQuery {\n  product(id: \"LazyQueryNoFragmentWithErrorQuery\") {\n    id\n    name\n  }\n}\n"
  }
};
})();

(node as any).hash = "a1c00c46568ee745f9707016c6f27eb1";

export default node;
