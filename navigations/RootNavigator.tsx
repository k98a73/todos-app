import { NavigationContainer } from '@react-navigation/native';
import { VFC } from 'react';
import { ActivityIndicator, SafeAreaView } from 'react-native';
import tw from 'tailwind-rn';

import { useAuthState } from '../hooks/useAuthState';
import { AuthStackNavigator } from './AuthStackNavigator';
import { TagStackNavigator } from './TagStackNavigator';

export const RootNavigator: VFC = () => {
  const { user, isLoading } = useAuthState();

  if (isLoading) {
    return (
      <SafeAreaView style={tw('flex-1 items-center justify-center')}>
        <ActivityIndicator size="large" color="gray" />
      </SafeAreaView>
    );
  }
  return (
    <NavigationContainer>
      {user?.uid ? <TagStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
};
