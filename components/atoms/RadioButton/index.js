import React from 'react';
import {styles} from './styles';
import {Text, TouchableOpacity, View} from 'react-native';

export const RadioButton = props => {
  return (
    <TouchableOpacity
      style={styles.radioButtonContainer}
      onPress={() => props.onPress()}>
      <View
        style={[
          {
            height: 24,
            width: 24,
            borderRadius: 12,
            borderWidth: 2,
            borderColor: '#000',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 5,
          },
        ]}>
        {props.selected ? (
          <View
            style={{
              height: 12,
              width: 12,
              borderRadius: 6,
              backgroundColor: '#757575',
            }}
          />
        ) : null}
      </View>
      <Text style={styles.radioLabel}>{props.title}</Text>
    </TouchableOpacity>
  );
};
