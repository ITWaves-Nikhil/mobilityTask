import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants/theme';

export const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  backgoundImage: {
    top: '-20%',
    right: '-50%',
    width: '150%',
    backgroundColor: COLORS.white,
    borderColor: COLORS.red,
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: 5,
    paddingVertical: 10,
    width: '100%',
    height: '90%',
    bottom: 0,
    position: 'absolute',
  },
});
