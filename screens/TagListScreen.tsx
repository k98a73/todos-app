import { Alert, SafeAreaView, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import tw from 'tailwind-rn';

import { auth } from '../firebaseConfig';
import { logout, selectUser } from '../slices/userSlice';
import { IconButton } from '../components/IconButton';

export const TagListScreen = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const signOut = async () => {
    try {
      await auth.signOut();
      dispatch(logout());
    } catch {
      Alert.alert('Logout error');
    }
  };
  return (
    <SafeAreaView style={tw('flex-1 mt-5 items-center')}>
      <Text>{user.email}</Text>
      <IconButton name="logout" size={20} color="blue" onPress={signOut} />
    </SafeAreaView>
  );
};
