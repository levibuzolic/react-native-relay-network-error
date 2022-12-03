import * as React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {graphql, useFragment, useLazyLoadQuery} from 'react-relay';
import type {LazyNetworkOnlyQueryWithErrorQuery} from './__generated__/LazyNetworkOnlyQueryWithErrorQuery.graphql';
import type {LazyNetworkOnlyQueryWithError_query$key} from './__generated__/LazyNetworkOnlyQueryWithError_query.graphql';

export default function LazyNetworkOnlyQueryWithError() {
  console.log('LazyNetworkOnlyQueryWithError.render');

  const query = useLazyLoadQuery<LazyNetworkOnlyQueryWithErrorQuery>(
    graphql`
      query LazyNetworkOnlyQueryWithErrorQuery {
        ...LazyNetworkOnlyQueryWithError_query
      }
    `,
    {},
    {fetchPolicy: 'network-only'}
  );

  console.log('LazyNetworkOnlyQueryWithError.render (after useLazyLoadQuery)');

  return <LazyNetworkOnlyQueryWithErrorInner query={query} />;
}

function LazyNetworkOnlyQueryWithErrorInner(props: {query: LazyNetworkOnlyQueryWithError_query$key}) {
  console.log('LazyNetworkOnlyQueryWithErrorInner.render');

  const query = useFragment(
    graphql`
      fragment LazyNetworkOnlyQueryWithError_query on Query {
        address {
          streetNumber
          streetName
          city
          state
          country
        }
      }
    `,
    props.query
  );

  console.log('LazyNetworkOnlyQueryWithErrorInner.render (after useFragment)');

  return <Text style={{padding: 10}}>{JSON.stringify(query, null, 2)}</Text>;
}
