import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  tagLabel: {},
  tagContainerWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  resetButton: {
    padding: 2,
    borderRadius: 20,
    borderWidth: 1,
    marginLeft: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  resetButtonLabel: {
    color: '#ad1723',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
