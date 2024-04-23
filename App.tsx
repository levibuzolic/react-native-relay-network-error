import Root from './src/Root';
import {RelayProvider} from './src/environment';

export default function App() {
  return (
    <RelayProvider>
      <Root />
    </RelayProvider>
  );
}
