import * as React from 'react';
import {Text} from 'react-native';

type Props = {children: React.ReactNode};
type State = {error: Error | null};

export class ErrorBoundary extends React.Component<Props, State> {
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
        </Text>
      );

    return <>{this.props.children}</>;
  }
}

export const Loading = () => <Text style={{padding: 20, backgroundColor: 'yellow'}}>Loading...</Text>;

export default function Boundary({children}: Props) {
  return (
    <ErrorBoundary>
      <React.Suspense fallback={<Loading />}>{children}</React.Suspense>
    </ErrorBoundary>
  );
}
