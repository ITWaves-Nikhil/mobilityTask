import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../../constants/theme';

export const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray,
    zIndex: -1,
  },
  radioButtonContainer: {
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'flex-start',
    backgroundColor: COLORS.white,
  },
  termsContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    marginVertical: 6,
  },
  grayText: {
    color: COLORS.gray,
    fontSize: 14,
    fontFamily: FONTS.MEDIUM,
  },
  blackText: {
    color: COLORS.black,
  },
  invalid: { borderBottomColor: COLORS.red },
  termsTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectMenuContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray,
  },
  transparentBorder: {
    borderBottomColor: 'transparent',
  },
  cameraButtonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 235,
    padding: 1,
    borderWidth: 1,
    borderColor: COLORS.blue,
    borderRadius: 20,
  },
  avatarPickerContainer: { justifyContent: 'center', alignItems: 'center' }
});
