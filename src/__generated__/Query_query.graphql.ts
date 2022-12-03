/**
 * @generated SignedSource<<44d5cea7f9c22a63c91547920a96beb4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Query_query$data = {
  readonly product: {
    readonly name: string;
  };
  readonly " $fragmentType": "Query_query";
};
export type Query_query$key = {
  readonly " $data"?: Query_query$data;
  readonly " $fragmentSpreads": FragmentRefs<"Query_query">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Query_query",
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
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "e731cc2d361f3a0c5d5518b9e57ca45b";

export default node;
