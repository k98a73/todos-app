import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { VFC } from 'react';
import { TagListScreen } from '../screens/TagListScreen';

import { RootStackParamList } from '../types/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const TagStackNavigator: VFC = () => (
  <Stack.Navigator>
    <Stack.Screen name="TagList" component={TagListScreen} />
  </Stack.Navigator>
);
