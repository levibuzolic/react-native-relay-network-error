import * as React from 'react';
import {RelayEnvironmentProvider} from 'react-relay';
import {Environment, Network, Store, RecordSource, type Variables, type RequestParameters} from 'relay-runtime';

const environment = new Environment({
  network: Network.create((operation, variables) => fetchGraphQl(operation, variables)),
  store: new Store(new RecordSource()),
});

export const RelayProvider = ({children}: {readonly children: React.ReactNode}) => (
  <RelayEnvironmentProvider environment={environment} children={children} />
);

async function fetchGraphQl(operation: RequestParameters, variables: Variables) {
  console.log('[fetchGraphQl] Run', operation.name, variables);

  await sleep(500);

  if (operation.name.includes('WithError')) {
    console.log('[fetchGraphQl] Simulating a fake network error for', operation.name);
    throw new Error('Simulated network error');
  }

  const response = await fetch('http://localhost:9002/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({query: operation.text, variables}),
  });

  console.log('[fetchGraphQl] Done', operation.name);

  return response.json();
}

// Simulate network latency
const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));
