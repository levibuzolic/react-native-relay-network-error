This is a minimal reproduction of incorrect Relay network error handling in the React Native renderer. At this stage I'm unsure if the root cause is an issue in React Native or Relay, however I've confirmed the same issue does not happen in `react-dom`.

The specific issue appears to be with `useLazyLoadQuery` when the `fetchPolicy` is set to either `store-and-network` or `store-or-network` though only when the missing data dependencies are specified in a `useFragment`.

I've setup this test case in the latest version of Expo (v47 - React Native 0.70), however the same issues occur in vanilla React Native projects, the primary app I work on is using React Native 0.65, so it goes back at least that far, however I'll try and do some further testing to see if this error is present in earlier versions.

## Setup

```
yarn install
yarn dev
```

This runs the [Relay Compiler](https://relay.dev/), [Expo](https://expo.dev/) and a [GraphQL server](https://github.com/IvanGoncharov/graphql-faker).

Alternative you can start each component individually:

  * `yarn run relay` - Run the Relay Compiler
  * `yarn run graphql` - Start a mock GraphQL server
  * `yarn run expo` - Get the app up and running (either native or web)

## Test Cases

### ✅ [`LazyQuery`](https://github.com/levibuzolic/react-native-relay-network-error/blob/main/src/LazyQuery.tsx)

Example of a working query with the same structure as the primary test case (`LazyQueryWithError`).

### ❌ [`LazyQueryWithError`](https://github.com/levibuzolic/react-native-relay-network-error/blob/main/src/LazyQueryWithError.tsx)

Primary example of the bug, the network layer is setup to throw a JS error to simulate a network error. The expected behaviour would be for that network error to bubble up to the closest error boundary and the component rendering would be halted. Instead the error is ignored and the component is rendered with incomplete data that violates the type constraints.

This appears to only happen when `fetchPolicy` is set to either `store-and-network` or `store-or-network` *and* the data dependencies requiring network are specified in a `useFragment`.

Curiously if you trigger another render in the component (e.g. by pressing a button to set some state) the error will be correctly handled, it's only on the initial render that the error is ignored.

### ❌ [`LazyQueryNoFragmentWithError`](https://github.com/levibuzolic/react-native-relay-network-error/blob/main/src/LazyQueryNoFragmentWithError.tsx)

This example is the same as the above but without the `useFragment`. The error is correctly handled.

### ✅ [`LazyNetworkOnlyQueryWithError`](https://github.com/levibuzolic/react-native-relay-network-error/blob/main/src/LazyNetworkOnlyQueryWithError.tsx)

This example is the same as the above but with `fetchPolicy` set to `network-only`. The error is correctly handled.
