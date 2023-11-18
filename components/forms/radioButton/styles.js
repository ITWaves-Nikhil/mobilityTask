import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../../constants/theme';

export const styles = StyleSheet.create({
  radio: {padding: 8, flexDirection: 'row', gap: 5},
  outerCircle: {
    borderColor: COLORS.black,
    borderWidth: 1,
    height: 20,
    width: 20,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selected: {
    backgroundColor: COLORS.cardBlue,
    borderColor: COLORS.cardBlue,
  },
  innerCircle: {
    backgroundColor: COLORS.white,
    height: 10,
    width: 10,
    borderRadius: 20,
  },
  labelText: {
    color: COLORS.black,
    fontFamily: FONTS.MEDIUM,
    fontSize: 16,
  },
});
