import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { memo, VFC } from 'react';
import {
  Alert,
  Dimensions,
  Platform,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useDispatch } from 'react-redux';
import tw from 'tailwind-rn';
import { useDeleteTag } from '../hooks/useDeleteTag';
import { setSelectedTag } from '../slices/todoSlice';
import { RootStackParamList } from '../types/types';

type Props = {
  id: string;
  name: string;
};

const { width } = Dimensions.get('window');

const TagCardMemo: VFC<Props> = ({ id, name }) => {
  const dispatch = useDispatch();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { deleteTag, deleteErr } = useDeleteTag();

  const navToTaskStack = () => {
    dispatch(setSelectedTag({ id, name }));
    navigation.navigate('TaskStack');
  };

  const deleteTagItem = async (idx: string) => {
    Alert.alert('Deleting', 'Are you sure?', [
      {
        text: 'cancel',
        onPress: () => {},
      },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: async () => {
          await deleteTag(idx);
        },
      },
    ]);
  };

  return (
    <TouchableOpacity
      style={[
        tw('my-1 mx-2 items-center border-green-600 border-l-4 bg-white'),
        {
          width: width - 20 * 2,
          shadowColor: 'black',
          shadowOffset: {
            width: 4,
            height: 4,
          },
          shadowOpacity: 0.5,
          shadowRadius: 2,
        },
      ]}
      onPress={navToTaskStack}
      onLongPress={() => deleteTagItem(id)}
    >
      <Text
        style={[
          tw('text-lg font-medium text-gray-700 py-1'),
          {
            fontFamily: Platform.select({
              ios: 'GillSans-Italic',
              android: 'sans-serif-condensed',
            }),
          },
        ]}
      >
        {name}
      </Text>
      {deleteErr !== '' && (
        <Text style={tw('text-red-500 font-semibold')}>{deleteErr}</Text>
      )}
    </TouchableOpacity>
  );
};

export const TagCard = memo(TagCardMemo);
