/**
 * @generated SignedSource<<46013e7f79445a330c454e8dfee971f8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type LazyNetworkOnlyQueryWithError_query$data = {
  readonly product: {
    readonly id: string;
    readonly name: string;
  };
  readonly " $fragmentType": "LazyNetworkOnlyQueryWithError_query";
};
export type LazyNetworkOnlyQueryWithError_query$key = {
  readonly " $data"?: LazyNetworkOnlyQueryWithError_query$data;
  readonly " $fragmentSpreads": FragmentRefs<"LazyNetworkOnlyQueryWithError_query">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "LazyNetworkOnlyQueryWithError_query",
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
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "3e4c9c5d01041e3515d9093558ff5ae7";

export default node;
