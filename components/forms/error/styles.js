import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../../constants/theme';

export const styles = StyleSheet.create({
  rootContainer: {paddingHorizontal: 2},
  errorText: {
    color: COLORS.red,
    padding: 2,
    fontSize: 12,
    fontFamily: FONTS.MEDIUM,
  },
});
