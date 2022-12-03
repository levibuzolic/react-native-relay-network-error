import * as React from 'react';
import {Button, SafeAreaView, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {RelayProvider} from './environment';
import Boundary from './Boundary';
import LazyQuery from './LazyQuery';
import LazyQueryWithError from './LazyQueryWithError';
import LazyQueryNoFragmentWithError from './LazyQueryNoFragmentWithError';
import LazyNetworkOnlyQueryWithError from './LazyNetworkOnlyQueryWithError';
import Notes from './Notes';

const EXAMPLES = [LazyQuery, LazyQueryWithError, LazyQueryNoFragmentWithError, LazyNetworkOnlyQueryWithError] as const;

export default function Root() {
  const [index, setIndex] = React.useState<number | undefined>();

  let body: React.ReactNode = EXAMPLES.map((Example, index) => (
    <View key={index} style={{borderBottomWidth: 1, borderColor: '#ddd'}}>
      <TouchableOpacity onPress={() => setIndex(index)}>
        <Text style={{padding: 15}}>{Example.name}</Text>
      </TouchableOpacity>
    </View>
  ));

  const Example = index !== undefined ? EXAMPLES[index] : undefined;

  if (Example)
    body = (
      <Boundary>
        <Example />
      </Boundary>
    );

  return (
    <RelayProvider>
      <View style={{backgroundColor: '#aaa'}}>
        <SafeAreaView>
          <View style={{padding: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <Button title="Back" onPress={() => setIndex(undefined)} disabled={index === undefined} />
            <Text style={{padding: 5}}>{Example?.name ?? 'Select an example'}</Text>
          </View>
        </SafeAreaView>
      </View>
      <ScrollView>
        {body}
        {Example?.notes && <Notes>{Example.notes}</Notes>}
      </ScrollView>
    </RelayProvider>
  );
}
