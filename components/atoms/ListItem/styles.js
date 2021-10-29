import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  itemContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  itemColumn: {
    overflow: 'hidden',
    textAlign: 'center',
    display: 'flex',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  flexOne: {
    flex: 1,
  },
  flexTwo: {
    flex: 2,
  },
  itemRow: {display: 'flex', flexDirection: 'row', flex: 1},
});
