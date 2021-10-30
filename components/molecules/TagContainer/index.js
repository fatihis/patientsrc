import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {PatientContext} from '../../../contexts/PatientContext/PatientContext';
import {Tag} from '../../atoms/Tag';
import {styles} from './styles';

export const TagContainer = () => {
  const patientCtx = useContext(PatientContext);
  return (
    <View style={styles.tagContainerWrapper}>
      {patientCtx.tagObj.name != '' ? (
        <Tag tagKey={'Name'} tagLabel={patientCtx.tagObj.name} />
      ) : null}
      {patientCtx.tagObj.nationalid != '' ? (
        <Tag tagKey={'ID'} tagLabel={patientCtx.tagObj.nationalid} />
      ) : null}
      {patientCtx.tagObj.given != '' ? (
        <Tag tagKey={'Given'} tagLabel={patientCtx.tagObj.given} />
      ) : null}
      {patientCtx.tagObj.family != '' ? (
        <Tag tagKey={'Family'} tagLabel={patientCtx.tagObj.family} />
      ) : null}
      <TouchableOpacity
        style={styles.resetButton}
        onPress={() => patientCtx.resetQuery()}>
        <Text style={styles.resetButtonLabel}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};
