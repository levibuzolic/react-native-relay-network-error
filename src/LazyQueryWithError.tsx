import * as React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {graphql, useFragment, useLazyLoadQuery} from 'react-relay';
import type {LazyQueryWithErrorQuery} from './__generated__/LazyQueryWithErrorQuery.graphql';
import type {LazyQueryWithError_query$key} from './__generated__/LazyQueryWithError_query.graphql';

export default function LazyQueryWithError() {
  console.log('LazyQueryWithError.render');

  const query = useLazyLoadQuery<LazyQueryWithErrorQuery>(
    graphql`
      query LazyQueryWithErrorQuery {
        ...LazyQueryWithError_query
      }
    `,
    {},
    {fetchPolicy: 'store-and-network'}
  );

  console.log('LazyQueryWithError.render (after useLazyLoadQuery)');

  return <LazyQueryWithErrorInner query={query} />;
}

function LazyQueryWithErrorInner(props: {query: LazyQueryWithError_query$key}) {
  console.log('LazyQueryWithErrorInner.render');

  const query = useFragment(
    graphql`
      fragment LazyQueryWithError_query on Query {
        product {
          id
          name
        }
      }
    `,
    props.query
  );

  console.log('LazyQueryWithErrorInner.render (after useFragment)');

  return <Text style={{padding: 10}}>{JSON.stringify(query, null, 2)}</Text>;
}
