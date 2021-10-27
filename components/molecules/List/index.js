import React from 'react';
import {styles} from './styles';
import {FlatList} from 'react-native';
import {Item} from '../../atoms/ListItem';

export const List = () => {
  return (
    <FlatList
      data={[
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
      ]}
      renderItem={item => {
        return (
          <Item
            item={item.item}
            onPress={() => console.log('item' + item.item.id)}
          />
        );
      }}
      keyExtractor={item => item.id}
    />
  );
};
