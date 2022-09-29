import { VFC } from 'react';
import { Text, View } from 'react-native';
import tw from 'tailwind-rn';

type Props = {
  first: string;
  last: string;
};

export const Title: VFC<Props> = ({ first, last }) => {
  return (
    <View style={tw('flex-row my-6 px-1')}>
      <View
        style={[
          tw('flex-1 mr-1 border self-center'),
          { borderColor: '#5f9ea0' },
        ]}
      />
      <Text style={tw('text-gray-700 text-3xl font-extrabold')}>
        {`${first}`}
        <Text style={[tw('font-light'), { color: '#5f9ea0' }]}>{last}</Text>
      </Text>
      <View
        style={[
          tw('flex-1 ml-1 border self-center'),
          { borderColor: '#5f9ea0' },
        ]}
      />
    </View>
  );
};
