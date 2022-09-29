import { Alert, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import tw from 'tailwind-rn';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { auth } from '../firebaseConfig';
import { logout, selectUser } from '../slices/userSlice';
import { IconButton } from '../components/IconButton';
import { Title } from '../components/Title';
import { RootStackParamList } from '../types/types';
import { VFC } from 'react';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'TagList'>;
};

export const TagListScreen: VFC<Props> = ({ navigation }) => {
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
      <Title first="Tag" last="List" />
      <TouchableOpacity
        style={tw('mt-2')}
        onPress={() => navigation.navigate('CreateTag')}
      >
        <MaterialCommunityIcons name="tag-plus" size={40} color="#5f9ea0" />
      </TouchableOpacity>
      <Text>{user.email}</Text>
      <IconButton name="logout" size={20} color="blue" onPress={signOut} />
    </SafeAreaView>
  );
};
