import {StyleSheet} from 'react-native';
import {FONTS} from '../../../constants/theme';

export const styles = StyleSheet.create({
  button: {padding: 2},
  pressed: {opacity: 0.6},
  btnTitle: {
    textAlign: 'right',
    fontFamily: FONTS.MEDIUM,
    fontSize: 16,
  },
});
