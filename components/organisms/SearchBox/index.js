import React, {useContext} from 'react';
import {View, Button} from 'react-native';
import {PatientContext} from '../../../contexts/PatientContext/PatientContext';
import {RadioButton} from '../../atoms/RadioButton';
import {DropdownPicker} from '../../molecules/Picker';
import {RadioGroup} from '../../molecules/RadioGroup';
import {SearchInput} from '../../molecules/SearchInput';

const SearchBox = () => {
  const patientCtx = useContext(PatientContext);
  return (
    <View>
      <SearchInput onChange={e => patientCtx.setSearchString(e)} />
      <DropdownPicker />
      <RadioGroup optionArray={patientCtx.asteriskRadioArray} />

      <Button title="Search" onPress={() => patientCtx.addNewSearchExp()} />
    </View>
  );
};

export default SearchBox;
