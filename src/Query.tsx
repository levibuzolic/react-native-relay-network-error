import * as React from 'react';
import {Text} from 'react-native';
import {graphql, useFragment, useLazyLoadQuery} from 'react-relay';
import type {Query} from './__generated__/Query.graphql';
import type {Query_query$key} from './__generated__/Query_query.graphql';

export default function Parent() {
  const query = useLazyLoadQuery<Query>(
    graphql`
      query Query {
        ...Query_query
      }
    `,
    {},
    // The issue happens with `store-and-network` and `store-or-network`
    // but not with `network-only`, that mode correctly bubbles the error
    {fetchPolicy: 'store-and-network'}
  );

  return <Inner query={query} />;
}

function Inner(props: {query: Query_query$key}) {
  const query = useFragment(
    graphql`
      fragment Query_query on Query {
        product {
          name
        }
      }
    `,
    props.query
  );

  // Attempting to access `query.product.name` here will cause an JS error because the component
  // is rendered and the data is unavailable. It should never make it to this point because the
  // network error should have halted rendering.
  return <Text style={{padding: 10}}>{query.product.name}</Text>;
}
