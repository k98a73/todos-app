import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { VFC } from 'react';
import { TaskListScreen } from '../screens/TaskListScreen';
import { RootStackParamList } from '../types/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const TaskStackNavigator: VFC = () => {
  return (
    <Stack.Navigator initialRouteName="TaskList">
      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen name="TaskList" component={TaskListScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
