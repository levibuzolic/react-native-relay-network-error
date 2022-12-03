This is a minimal reproduction of incorrect Relay network error handling in the React Native renderer. At this stage I'm unsure if the root cause is an issue in React Native or Relay, however I've confirmed the same issue does not happen in `react-dom`.

The specific issue appears to be with `useLazyLoadQuery` when the `fetchPolicy` is set to either `store-and-network` or `store-or-network` though only when the missing data dependencies are specified in a `useFragment`.

I've setup this test case in the latest version of Expo (v47 - React Native 0.70), however the same issues occur in vanilla React Native projects, the primary app I work on is using React Native 0.65, so it goes back at least that far, however I'll try and do some further testing to see if this error is present in earlier versions.

This issue exists in both production and development environments.

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

Example of a working query with the same structure as the primary test case (`LazyQueryWithError`), this is the only test case with a working network request just to validate the setup and environment.

![Kapture 2022-12-03 at 22 14 00](https://user-images.githubusercontent.com/721323/205438238-706e4d4e-3be1-45a1-8f03-00f474e38e0d.gif)


### ❌ [`LazyQueryWithError`](https://github.com/levibuzolic/react-native-relay-network-error/blob/main/src/LazyQueryWithError.tsx)

Primary example of the bug, the network layer is setup to throw a JS error to simulate a network error. 

**Expected behaviour:** The network error would bubble up and be caught by the parent error boundary and the component would never render to completion.

**Observed behaviour:** The network error is ignored and the component renders to completion. Typically in a real environment this would lead to JS errors as the rendered component tries to access data that isn't present.

This appears to only happen when `fetchPolicy` is set to either `store-and-network` or `store-or-network` *and* the data dependencies requiring network are specified in a `useFragment`.

Curiously if you trigger another render in the component (e.g. by pressing a button to set some state) the error will then be correctly handled, it's only on the initial render that the error is ignored.

![Kapture 2022-12-03 at 22 14 48](https://user-images.githubusercontent.com/721323/205438241-cb515379-64a8-4598-9d4f-c47d7fdbb66b.gif)

### ✅ [`LazyQueryNoFragmentWithError`](https://github.com/levibuzolic/react-native-relay-network-error/blob/main/src/LazyQueryNoFragmentWithError.tsx)

This example is the same as the above but without the `useFragment`. The network error is handled as expected.

![Kapture 2022-12-03 at 22 15 20](https://user-images.githubusercontent.com/721323/205438485-18ae6669-baac-4bb9-8ffe-7e173fb6a732.gif)


### ✅ [`LazyNetworkOnlyQueryWithError`](https://github.com/levibuzolic/react-native-relay-network-error/blob/main/src/LazyNetworkOnlyQueryWithError.tsx)

This example is the same as the above but with `fetchPolicy` set to `network-only`. The error is correctly handled.

![Kapture 2022-12-03 at 22 15 57](https://user-images.githubusercontent.com/721323/205438248-d07b3210-8a3d-41d4-b89a-88aaf4db2438.gif)
