import React from 'react';
import {styles} from './styles';
import {Picker} from '@react-native-picker/picker';

export const PickerItem = ({label, value}) => {
  return <Picker.Item label={label} value={value} />;
};
