import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

export const Item = ({item, onPress, textColor, backgroundColor}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.itemContainer, backgroundColor]}>
      <View style={styles.itemRow}>
        <Text
          style={[
            styles.itemColumn,
            styles.flexOne,
            textColor,
          ]}>{`Name: ${item.name}`}</Text>
        <Text
          style={[
            styles.itemColumn,
            styles.flexTwo,
            textColor,
          ]}>{`Family Name: ${item.familyName}`}</Text>
        <Text
          style={[
            styles.itemColumn,
            styles.flexOne,
            textColor,
          ]}>{`ID: ${item.nationalId}`}</Text>
      </View>
      <View style={styles.itemRow}>
        <Text
          style={[
            styles.itemColumn,
            styles.flexOne,

            textColor,
          ]}>{`Address: ${item.address}`}</Text>
      </View>
      <View style={styles.itemRow}>
        <Text
          style={[
            styles.itemColumn,
            styles.flexOne,
            ,
            textColor,
          ]}>{`Phone: ${item.phone}`}</Text>
        <Text
          style={[styles.itemColumn, styles.flexOne, textColor]}>{`Gender: ${
          item.gender.charAt(0).toUpperCase() + item.gender.slice(1)
        }`}</Text>
      </View>
    </TouchableOpacity>
  );
};
