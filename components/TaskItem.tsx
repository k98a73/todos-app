import tw from 'tailwind-rn';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { memo, VFC } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/types';
import { Text, TouchableOpacity, View } from 'react-native';
import { IconButton } from './IconButton';
import { setEditTask } from '../slices/todoSlice';

type Props = {
  id: string;
  title: string;
  completed: boolean;
  createdAt: string;
  toggleCompleted: (idx: string, bool: boolean) => void;
  deleteTask: (idx: string) => void;
};

const TaskItemMemo: VFC<Props> = ({
  id,
  title,
  completed,
  createdAt,
  toggleCompleted,
  deleteTask,
}) => {
  const dispatch = useDispatch();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={tw('flex-row p-3 border-b border-gray-200')}>
      <TouchableOpacity onPress={() => toggleCompleted(id, completed)}>
        <MaterialCommunityIcons
          name={completed ? 'square-off' : 'square-outline'}
          size={24}
          color="gray"
        />
      </TouchableOpacity>
      <View style={tw('flex-1 mx-3')}>
        <View style={tw('flex-row justify-between items-center')}>
          <Text style={tw('mr-1 text-gray-700')}>{createdAt}</Text>
          <IconButton
            name="delete"
            size={14}
            color="black"
            onPress={() => deleteTask(id)}
          />
        </View>
        <TouchableOpacity
          onLongPress={() => {
            dispatch(setEditTask({ id, title }));
            // navigation.navigate('EditTask');
          }}
        >
          <Text
            style={[
              tw('ml-1 leading-4'),
              {
                textDecorationLine: completed ? 'line-through' : 'none',
                color: completed ? 'gray' : 'black',
              },
            ]}
          >
            {title}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const TaskItem = memo(TaskItemMemo);