/**
 * @generated SignedSource<<d483e038990070474e91f7792ec4abe5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type LazyQueryWithError_query$data = {
  readonly product: {
    readonly id: string;
    readonly name: string;
  };
  readonly " $fragmentType": "LazyQueryWithError_query";
};
export type LazyQueryWithError_query$key = {
  readonly " $data"?: LazyQueryWithError_query$data;
  readonly " $fragmentSpreads": FragmentRefs<"LazyQueryWithError_query">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "LazyQueryWithError_query",
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
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "97f5382e80b3a107404ec32dbc04da8b";

export default node;
