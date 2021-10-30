import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  itemContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    paddingVertical: 7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
  },
  itemColumn: {
    overflow: 'hidden',
    display: 'flex',
    alignSelf: 'center',
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#757575',
  },
  flexOne: {
    flex: 1,
  },
  flexTwo: {
    flex: 2,
  },
  itemRow: {display: 'flex', flexDirection: 'row', flex: 1},
});
