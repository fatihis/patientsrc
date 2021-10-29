import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {PatientContext} from '../../../contexts/PatientContext/PatientContext';
import {RadioButton} from '../../atoms/RadioButton';
import {styles} from './styles';
export const RadioGroup = ({optionArray}) => {
  const patientCtx = useContext(PatientContext);
  return (
    <View style={styles.radioGroupContainer}>
      {optionArray.map(element => {
        return (
          <RadioButton
            key={element.id}
            selected={element.selected}
            title={element.title}
            onPress={() => patientCtx.updateAsteriskOption(element.id)}
          />
        );
      })}
    </View>
  );
};
