import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../../constants/theme';

export const styles = StyleSheet.create({
  userCardContainer: {
    padding: 6,
    height: 100,
    gap: 10,
    overflow: 'hidden',
    elevation: 5,
    shadowOffset: {height: 0, width: 0},
    shadowColor: COLORS.black,
    shadowOpacity: 0.7,
  },
  pressed: {opacity: 0.8},
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    borderWidth: 1,
    padding: 10,
    borderColor: COLORS.white,
    borderStyle: 'dotted',
  },
  iconImage: {height: 80, width: 80},
  userTypeContainer: {flex: 1},
  titleText: {
    color: COLORS.white,
    fontSize: 18,
    fontFamily: FONTS.MEDIUM,
  },
  whiteText: {
    fontSize: 16,
    color: COLORS.white,
    fontFamily: FONTS.REGULAR,
  },
});
