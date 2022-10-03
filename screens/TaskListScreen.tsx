import { Text, SafeAreaView, View, TouchableOpacity } from 'react-native';
import React, { VFC } from 'react';
import { useSelector } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';
import tw from 'tailwind-rn';
import { selectTag } from '../slices/todoSlice';
import { Title } from '../components/Title';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/types';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'TaskList'>;
};

export const TaskListScreen: VFC<Props> = ({ navigation }) => {
  const tag = useSelector(selectTag);
  return (
    <SafeAreaView style={tw('flex-1')}>
      <Title first="Tasks" last={tag.name} />
      <View style={tw('items-center')}>
        <TouchableOpacity onPress={() => navigation.navigate('CreateTask')}>
          <MaterialIcons name="playlist-add" size={40} color="#5f9ea0" />
        </TouchableOpacity>
        <Text style={tw('text-gray-700 mt-2 mb-5')}>Add task</Text>
      </View>
    </SafeAreaView>
  );
};
