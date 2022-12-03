import * as React from 'react';
import {Button, SafeAreaView, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {RelayProvider} from './environment';
import Boundary from './Boundary';
import LazyQuery from './LazyQuery';
import LazyQueryWithError from './LazyQueryWithError';
import LazyNetworkOnlyQueryWithError from './LazyNetworkOnlyQueryWithError';

const EXAMPLES = [LazyQuery, LazyQueryWithError, LazyNetworkOnlyQueryWithError] as const;

export default function Root() {
  const [index, setIndex] = React.useState<number | undefined>();

  let body = (
    <ScrollView key={index}>
      {EXAMPLES.map((Example, index) => (
        <View key={index} style={{borderBottomWidth: 1, borderColor: '#ddd'}}>
          <TouchableOpacity onPress={() => setIndex(index)}>
            <Text style={{padding: 15}}>{Example.name}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );

  if (index !== undefined) {
    const Example = EXAMPLES[index];

    body = (
      <ScrollView key={index}>
        <Boundary>
          <Example />
        </Boundary>
      </ScrollView>
    );
  }

  return (
    <RelayProvider>
      <View style={{backgroundColor: '#aaa'}}>
        <SafeAreaView>
          <View style={{padding: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <Button title="Back" onPress={() => setIndex(undefined)} disabled={index === undefined} />
            <Text style={{padding: 5}}>{index != null ? EXAMPLES[index].name : 'Select an example'}</Text>
          </View>
        </SafeAreaView>
      </View>
      {body}
    </RelayProvider>
  );
}
