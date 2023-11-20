import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../../constants/theme';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export const styles = StyleSheet.create({
  rootContainer: {flex: 1, justifyContent: 'space-between'},
  mainContainer: {gap: 10},
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: COLORS.gray,
  },
  normalText: {fontFamily: FONTS.MEDIUM, fontSize: 16, color: COLORS.black},
  grayText: {color: COLORS.gray, fontFamily: FONTS.MEDIUM, fontSize: 16},
  signupContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'baseline',
    flexDirection: 'row',
  },
  blackText: {
    color: COLORS.black,
  },
  servicesContainer: {alignItems: 'center'},
  servicesContainerText: {flexDirection: 'row', justifyContent: 'center'},
  redBorder: {borderColor: COLORS.red},
});
