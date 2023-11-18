import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../constants/theme';

export const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginHorizontal: 20,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  backgoundImage: {
    flex: 1,
  },
  logoImage: {width: '100%', height: '100%'},
  logoContainer: {height: '15%', width: '65%', alignItems: 'center'},
  summaryText: {
    fontSize: 16,
    textAlign: 'center',
    color: COLORS.white,
    fontFamily: FONTS.REGULAR,
  },
  optionsContainer: {width: '100%'},
  summaryContainer: {width: '100%', padding: 10},
  buttonsContainer: {width: '100%', gap: 10},
});
