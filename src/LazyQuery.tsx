import * as React from 'react';
import {Text} from 'react-native';
import {graphql, useFragment, useLazyLoadQuery} from 'react-relay';
import type {LazyQueryQuery} from './__generated__/LazyQueryQuery.graphql';
import type {LazyQuery_query$key} from './__generated__/LazyQuery_query.graphql';

export default function LazyQuery() {
  console.log('LazyQuery.render');

  const query = useLazyLoadQuery<LazyQueryQuery>(
    graphql`
      query LazyQueryQuery {
        ...LazyQuery_query
      }
    `,
    {},
    {fetchPolicy: 'store-and-network'}
  );

  console.log('LazyQuery.render (after useLazyLoadQuery)');

  return <LazyQueryInner query={query} />;
}

function LazyQueryInner(props: {readonly query: LazyQuery_query$key}) {
  console.log('LazyQueryInner.render');

  const query = useFragment(
    graphql`
      fragment LazyQuery_query on Query {
        product(id: "LazyQuery") {
          id
          name
        }
      }
    `,
    props.query
  );

  console.log('LazyQueryInner.render (after useFragment)');

  return <Text style={{padding: 10}}>{JSON.stringify(query, null, 2)}</Text>;
}

LazyQuery.notes =
  'This example is to verify normal queries work without issue, it has a `fetchPolicy` of `store-and-network`';
