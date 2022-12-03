/**
 * @generated SignedSource<<a2f1faec7f7836526ea3b1d507e5cf8c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type LazyNetworkOnlyQueryWithError_query$data = {
  readonly address: {
    readonly city: string;
    readonly country: string;
    readonly state: string;
    readonly streetName: string;
    readonly streetNumber: number;
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
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "1d68ffde7f511a0556b961660cc57516";

export default node;
