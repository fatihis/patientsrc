import React from 'react';
import {Button, SafeAreaView, StyleSheet} from 'react-native';
import {List} from './components/molecules/List';
import SearchBox from './components/organisms/SearchBox';
import {
  PatientContext,
  PatientContextProvider,
} from './contexts/PatientContext/PatientContext';
const App = () => {
  return (
    <PatientContextProvider>
      <SafeAreaView style={styles.mainContainer}>
        <SearchBox />
        <List />
      </SafeAreaView>
    </PatientContextProvider>
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
