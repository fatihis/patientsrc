import React, {useContext, useState} from 'react';
import {PickerItem} from '../../atoms/PickerItem';
import {Picker} from '@react-native-picker/picker';
import {styles} from './styles';
import {PatientContext} from '../../../contexts/PatientContext/PatientContext';

export const DropdownPicker = () => {
  const patientCtx = useContext(PatientContext);
  return (
    <Picker
      style={styles.pickerContainer}
      selectedValue={patientCtx.currentFilter}
      onValueChange={(itemValue, itemIndex) =>
        patientCtx.setCurrentFilter(itemValue)
      }>
      <PickerItem label="Name" value="name" />
      <PickerItem label="Given" value="given" />
      <PickerItem label="Family" value="family" />
      <PickerItem label="National ID" value="nationalid" />
    </Picker>
  );
};
