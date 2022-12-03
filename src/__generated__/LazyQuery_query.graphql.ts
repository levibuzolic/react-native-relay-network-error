/**
 * @generated SignedSource<<704e36407c8d7d39449efe0e2ed624b8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type LazyQuery_query$data = {
  readonly user: {
    readonly email: string;
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
      "args": null,
      "concreteType": "User",
      "kind": "LinkedField",
      "name": "user",
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
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "email",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "68d20b7f1543afa09eb3dace694141d3";

export default node;
