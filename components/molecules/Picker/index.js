import React, {useState} from 'react';
import {PickerItem} from '../../atoms/PickerItem';
import {Picker} from '@react-native-picker/picker';
import {styles} from './styles';

export const DropdownPicker = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <Picker
      selectedValue={selectedLanguage}
      onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}>
      <PickerItem label="s" value="j" />
      <PickerItem label="s" value="j" />
    </Picker>
  );
};
