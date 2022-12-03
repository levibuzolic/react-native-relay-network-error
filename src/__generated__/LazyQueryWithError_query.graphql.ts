/**
 * @generated SignedSource<<e0d1fb36159c6cf62f65999c5e4568a5>>
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
      "args": [
        {
          "kind": "Literal",
          "name": "id",
          "value": "LazyQueryWithError"
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
      "storageKey": "product(id:\"LazyQueryWithError\")"
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "25ab5e037d7e4ed663b0b740015baee6";

export default node;
