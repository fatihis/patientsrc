import React, {useContext} from 'react';
import {View, Button} from 'react-native';
import {PatientContext} from '../../../contexts/PatientContext/PatientContext';
import {DropdownPicker} from '../../molecules/Picker';
import {SearchInput} from '../../molecules/SearchInput';

const SearchBox = props => {
  const patientCtx = useContext(PatientContext);
  return (
    <View>
      <SearchInput onChange={e => patientCtx.setSearchString(e)} />
      <DropdownPicker />
      <Button title="Search" onPress={() => patientCtx.addNewSearchExp()} />
    </View>
  );
};

export default SearchBox;
