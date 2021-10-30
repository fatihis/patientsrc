import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

export const Item = ({item, onPress, textColor, backgroundColor}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.itemContainer, backgroundColor]}>
      <View style={styles.itemRow}>
        <Text style={[styles.itemColumn, styles.flexOne, textColor]}>
          {item.name} {item.familyName}
        </Text>
        <Text style={[styles.itemColumn, styles.flexOne, textColor]}>
          {item.nationalId}
        </Text>
      </View>
      <View style={styles.itemRow}>
        <Text style={[styles.itemColumn, styles.flexOne, , textColor]}>
          {item.phone}
        </Text>
        <Text style={[styles.itemColumn, styles.flexOne, textColor]}>
          {item.gender.charAt(0).toUpperCase() + item.gender.slice(1)}
        </Text>
      </View>
      <View style={styles.itemRow}>
        <Text style={[styles.itemColumn, styles.flexOne, textColor]}>
          {item.address}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
