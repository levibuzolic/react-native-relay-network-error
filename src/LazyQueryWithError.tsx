import * as React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {graphql, useFragment, useLazyLoadQuery} from 'react-relay';
import type {LazyQueryWithErrorQuery} from './__generated__/LazyQueryWithErrorQuery.graphql';
import type {LazyQueryWithError_query$key} from './__generated__/LazyQueryWithError_query.graphql';

export default function LazyQueryWithError() {
  console.log('LazyQueryWithError.render');

  const [state, setState] = React.useState(0);

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

  return (
    <>
      <LazyQueryWithErrorInner query={query} />
      <Button title={`State: ${state}`} onPress={() => setState(state + 1)} />
    </>
  );
}

function LazyQueryWithErrorInner(props: {query: LazyQueryWithError_query$key}) {
  console.log('LazyQueryWithErrorInner.render');

  const query = useFragment(
    graphql`
      fragment LazyQueryWithError_query on Query {
        product(id: "LazyQueryWithError") {
          id
          name
        }
      }
    `,
    props.query
  );

  console.log('LazyQueryWithErrorInner.render (after useFragment)');

  // Attempting to access `query.product.name` here will cause an JS error because the component
  // is rendered before the data is available, when it should have bubbled the network error up
  // to the error boundary.

  return <Text style={{padding: 10}}>{JSON.stringify(query, null, 2)}</Text>;
}

LazyQueryWithError.notes =
  'This example throws a network error and has a `fetchPolicy` of `store-and-network`. The error boundary should catch the network error, but instead the component tries to render with incomplete data that violates the types. Interestingly, if you click the button to update the state, the error boundary will finally catch the network error. The same behaviour is also present with `store-or-network';
