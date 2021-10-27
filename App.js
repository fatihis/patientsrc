import React from 'react';

import {SafeAreaView, StyleSheet, TextInput} from 'react-native';

import {List} from './components/molecules/List';
import {DropdownPicker} from './components/molecules/Picker';
const App = () => {
  const onChangeText = text => {
    console.log(text);
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <TextInput
        style={styles.input}
        onChangeText={text => onChangeText(text)}
        placeholder="Type search key"
      />
      <DropdownPicker />
      <List />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
