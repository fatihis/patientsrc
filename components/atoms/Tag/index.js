import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

export const Tag = ({tagLabel, tagKey}) => {
  return (
    <View style={styles.tagContainer}>
      <Text style={styles.tagLabel}>{`${tagKey} : `}</Text>
      <Text style={styles.tagLabel}>{`${tagLabel}`}</Text>
    </View>
  );
};
