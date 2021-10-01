import React from 'react';
import {View, Text, FlatList} from 'react-native';
import tw from 'tailwind-react-native-classnames';

function Home() {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];
  const Item = ({title}) => (
    <View>
      <Text style={tw`text-md bg-blue-500 mx-2 my-1 w-48 tracking-wide`}>
        {title}
      </Text>
    </View>
  );

  const renderItem = ({item}) => <Item title={item.title} />;
  return (
    <View
      style={tw`p-4 android:py-3 bg-red-300 flex flex-row overflow-x-auto w-96`}>
      <FlatList
        horizontal={true}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

export default Home;
