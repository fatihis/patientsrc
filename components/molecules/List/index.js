import React, {useContext} from 'react';
import {styles} from './styles';
import {FlatList} from 'react-native';
import {Item} from '../../atoms/ListItem';
import {PatientContext} from '../../../contexts/PatientContext/PatientContext';

export const List = () => {
  const patientCtx = useContext(PatientContext);

  return (
    <FlatList
      data={patientCtx.displayData}
      style={styles.flatList}
      renderItem={item => {
        return (
          <Item
            item={item.item}
            key={item.item.id}
            backgroundColor={
              item.index % 2 == 0
                ? {backgroundColor: 'lightgray'}
                : {backgroundColor: 'white'}
            }
            onPress={() => console.log('item' + item.id)}
          />
        );
      }}
    />
  );
};
