import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../constants/theme';

export const styles = StyleSheet.create({
  rootContainer: {
    paddingTop: 100,
    flex: 1,
    justifyContent: 'space-between',
    padding: 30,
  },
  userDetailContainer: {
    padding: 10,
    marginVertical: 20,
  },
  detailText: {
    fontSize: 20,
    color: COLORS.black,
    alignSelf: 'center',
  },
});
