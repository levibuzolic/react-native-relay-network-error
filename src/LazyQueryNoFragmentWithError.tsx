import * as React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {graphql, useFragment, useLazyLoadQuery} from 'react-relay';
import type {LazyQueryNoFragmentWithErrorQuery} from './__generated__/LazyQueryNoFragmentWithErrorQuery.graphql';

export default function LazyQueryNoFragmentWithError() {
  console.log('LazyQueryNoFragmentWithError.render');

  const [state, setState] = React.useState(0);

  const query = useLazyLoadQuery<LazyQueryNoFragmentWithErrorQuery>(
    graphql`
      query LazyQueryNoFragmentWithErrorQuery {
        product(id: "LazyQueryNoFragmentWithErrorQuery") {
          id
          name
        }
      }
    `,
    {},
    {fetchPolicy: 'store-and-network'}
  );

  console.log('LazyQueryNoFragmentWithError.render (after useLazyLoadQuery)');

  return <Text style={{padding: 10}}>{JSON.stringify(query, null, 2)}</Text>;
}

LazyQueryNoFragmentWithError.notes =
  'This example is the same as `LazyQueryWithError` however doesn’t specify the data dependencies in a `useFragment`';
