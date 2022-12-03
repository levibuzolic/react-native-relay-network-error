import * as React from 'react';
import {Text} from 'react-native';

export default function Notes({children}: {children: string}) {
  return <Text style={{padding: 10, color: '#888'}}>{children}</Text>;
}
