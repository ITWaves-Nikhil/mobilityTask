import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../../constants/theme';

export const styles = StyleSheet.create({
  radio: {padding: 8, flexDirection: 'row'},
  outerCircle: {
    borderColor: COLORS.black,
    borderWidth: 1,
    height: 20,
    width: 20,
    justifyContent: 'center',
    overflow: 'hidden',
    alignItems: 'center',
  },
  hidden: {display: 'none'},
  innerCircle: {
    objectFit: 'contain',
    height: 25,
    width: 25,
  },
  labelText: {color: COLORS.black, fontFamily: FONTS.MEDIUM},
});
