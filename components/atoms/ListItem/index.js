import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

export const Item = ({item, onPress, textColor}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.item]}>
      <Text style={[styles.title, textColor]}>{item.title}</Text>
    </TouchableOpacity>
  );
};
