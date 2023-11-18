import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../../constants/theme';
export const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
  },
  labelText: {
    color: COLORS.black,
  },
  textInput: {
    color: COLORS.black,
    fontFamily: FONTS.MEDIUM,
    fontSize: 16,
    backgroundColor: COLORS.white,
  },
  invalid: {backgroundColor: COLORS.red},
  hidden: {
    display: 'none',
  },
  transparentBorder: {
    borderColor: 'transparent',
  },
});
