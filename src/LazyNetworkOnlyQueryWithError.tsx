import * as React from 'react';
import {Text} from 'react-native';
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

function LazyNetworkOnlyQueryWithErrorInner(props: {readonly query: LazyNetworkOnlyQueryWithError_query$key}) {
  console.log('LazyNetworkOnlyQueryWithErrorInner.render');

  const query = useFragment(
    graphql`
      fragment LazyNetworkOnlyQueryWithError_query on Query {
        product(id: "LazyNetworkOnlyQueryWithError") {
          id
          name
        }
      }
    `,
    props.query
  );

  console.log('LazyNetworkOnlyQueryWithErrorInner.render (after useFragment)');

  return <Text style={{padding: 10}}>{JSON.stringify(query, null, 2)}</Text>;
}

LazyNetworkOnlyQueryWithError.notes =
  'This example throws a network error and has a `fetchPolicy` of `network-only`. Unlike the `store-and-network` example, the error boundary catches the network error immediately.';
