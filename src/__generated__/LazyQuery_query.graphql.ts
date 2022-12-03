/**
 * @generated SignedSource<<bdd9cac366879812671c7595b088242b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type LazyQuery_query$data = {
  readonly product: {
    readonly id: string;
    readonly name: string;
  };
  readonly " $fragmentType": "LazyQuery_query";
};
export type LazyQuery_query$key = {
  readonly " $data"?: LazyQuery_query$data;
  readonly " $fragmentSpreads": FragmentRefs<"LazyQuery_query">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "LazyQuery_query",
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
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "62bce2d1bb1c4cf9c8a78d3a6341ab0d";

export default node;
