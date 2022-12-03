import * as React from 'react';
import {Button, Text} from 'react-native';
import Query from './src/Query';
import {RelayProvider} from './src/environment';

type Props = {children: React.ReactNode};
type State = {error: Error | null};
class ErrorBoundary extends React.Component<Props, State> {
  state: State = {error: null};

  static getDerivedStateFromError(error: Error): State {
    return {error};
  }

  render() {
    const {error} = this.state;

    if (error)
      return (
        <Text style={{fontSize: 10, color: 'white', padding: 20, backgroundColor: '#911'}}>
          {error.name}: {error.message}
          {'\n'}
          {error.stack}
        </Text>
      );

    return <>{this.props.children}</>;
  }
}

const Loading = () => <Text style={{padding: 20, backgroundColor: 'yellow'}}>Loading...</Text>;

export default function App() {
  const [load, setLoad] = React.useState(false);

  return (
    <RelayProvider>
      <ErrorBoundary>
        <React.Suspense fallback={<Loading />}>
          {load ? <Query /> : <Button title="Load" onPress={() => setLoad(true)} />}
        </React.Suspense>
      </ErrorBoundary>
    </RelayProvider>
  );
}
