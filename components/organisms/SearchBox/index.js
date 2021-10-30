import React, {useContext} from 'react';
import {styles} from './styles';
import {View, TouchableOpacity, Text} from 'react-native';
import {PatientContext} from '../../../contexts/PatientContext/PatientContext';
import {DropdownPicker} from '../../molecules/Picker';
import {RadioGroup} from '../../molecules/RadioGroup';
import {SearchInput} from '../../molecules/SearchInput';

const SearchBox = () => {
  const patientCtx = useContext(PatientContext);
  return (
    <View>
      <SearchInput
        style={styles.searchInput}
        onChange={e => patientCtx.setSearchString(e)}
      />
      <RadioGroup optionArray={patientCtx.asteriskRadioArray} />

      <View>
        <TouchableOpacity
          onPress={() => patientCtx.addNewSearchExp()}
          style={styles.button}>
          <Text style={styles.searchText}>Search</Text>
        </TouchableOpacity>
      </View>
      <DropdownPicker />
    </View>
  );
};

export default SearchBox;
