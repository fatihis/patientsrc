import React from 'react';
import {styles} from './styles';
import {Picker} from '@react-native-picker/picker';

export const PickerItem = ({label, value}) => {
  return <Picker.Item color={'#757575'} label={label} value={value} />;
};
