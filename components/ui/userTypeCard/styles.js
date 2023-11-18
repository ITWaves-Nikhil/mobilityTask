import {StyleSheet} from 'react-native';
import {FONTS, COLORS} from '../../../constants/theme';

export const styles = StyleSheet.create({
  userCardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    padding: 8,
    gap: 10,
    overflow: 'hidden',
    elevation: 5,
    shadowOffset: {height: 0, width: 0},
    shadowColor: COLORS.black,
    shadowOpacity: 0.7,
  },
  pressed: {opacity: 0.8},
  iconImage: {height: 90, width: 90},
  iconContainer: {marginHorizontal: 2},
  userTypeContainer: {flex: 1, gap: 5},
  titleText: {
    fontSize: 18,
    fontFamily: FONTS.MEDIUM,
    color: COLORS.white,
  },
  whiteText: {fontSize: 16, color: COLORS.white, fontFamily: FONTS.REGULAR},
});
