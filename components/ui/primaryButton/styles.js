import {StyleSheet} from 'react-native';
import {FONTS, COLORS} from '../../../constants/theme';

export const styles = StyleSheet.create({
  button: {
    height: 56,
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    elevation: 20,
    shadowOffset: {height: 0, width: 0},
    shadowColor: COLORS.black,
    shadowOpacity: 0.7,
  },
  disabled: {backgroundColor: COLORS.gray},
  textContainer: {padding: 12},
  pressed: {opacity: 0.6},
  btnTitle: {
    color: COLORS.white,
    textAlign: 'center',
    fontSize: 18,
    fontFamily: FONTS.REGULAR,
  },
});
