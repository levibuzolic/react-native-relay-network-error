This is a minimal reproduction of incorrect Relay network error handling in the React Native renderer. At this stage I'm unsure if the root cause is an issue in React Native or Relay, however I've confirmed the same issue does not happen in `react-dom`.

The specific issue appears to be with `useLazyLoadQuery` when the `fetchPolicy` is set to either `store-and-network` or `store-or-network` though only when the missing data dependencies are specified in a `useFragment`.

I've setup this test case in the latest version of Expo (v47 - React Native 0.70), however the same issues occur in vanilla React Native projects, the primary app I work on is using React Native 0.65, so it goes back at least that far, however I'll try and do some further testing to see if this error is present in earlier versions.

This issue exists in both production and development environments.

## Setup

  * `yarn run relay` - Run the Relay Compiler
  * `yarn run expo` - Get the app up and running (either native or web)

Deploy web with `NODE_OPTIONS=--openssl-legacy-provider npx expo export:web`

## [Minimal reproduction](https://github.com/levibuzolic/react-native-relay-network-error/blob/main/src/Query.tsx)

Primary example of the bug, the network layer is setup to throw a JS error to simulate a network error.

**Expected behaviour:** The network error would bubble up and be caught by the parent error boundary and the component would never render to completion.

**Observed behaviour:** The network error is ignored and the component renders to completion. Typically in a real environment this would lead to JS errors as the rendered component tries to access data that isn't present.

This appears to only happen when `fetchPolicy` is set to either `store-and-network` or `store-or-network` *and* the data dependencies requiring network are specified in a `useFragment`.

Curiously if you trigger another render in the component (e.g. by pressing a button to set some state) the error will then be correctly handled, it's only on the initial render that the error is ignored.
