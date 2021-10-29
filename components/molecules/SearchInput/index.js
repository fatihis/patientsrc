import React from 'react';
import {TextInput} from 'react-native';
import {styles} from './styles';

export const SearchInput = ({onChange}) => {
  return (
    <TextInput
      style={styles.TextInput}
      onChangeText={text => onChange(text)}
      placeholder="Type search key"
    />
  );
};
