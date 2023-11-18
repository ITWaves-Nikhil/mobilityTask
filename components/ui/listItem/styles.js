import {StyleSheet} from 'react-native';
import {FONTS, COLORS} from '../../../constants/theme';

export const styles = StyleSheet.create({
  listItemContainer: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    gap: 10,
  },
  iconImage: {height: 25, width: 25, objectFit: 'contain'},
  iconContainer: {margin: 2, padding: 4},
  listTextContainer: {},
  listText: {
    fontFamily: FONTS.MEDIUM,
    fontSize: 18,
    color: COLORS.white,
  },
});
