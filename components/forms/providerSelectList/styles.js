import {StyleSheet} from 'react-native';
import {FONTS, COLORS} from '../../../constants/theme';

export const styles = StyleSheet.create({
  buttonStyle: {
    borderRadius: 0,
    borderWidth: 0,
  },
  dropDownBoxStyle: {
    borderColor: COLORS.gray,
    borderRadius: 0,
    borderWidth: 1,
    elevation: 2,
  },
  fontStyle: {fontFamily: FONTS.MEDIUM, fontSize: 16},
});
