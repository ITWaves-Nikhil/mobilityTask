import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants/theme';
export const styles = StyleSheet.create({
  rootContainer: {
    alignSelf: 'center',
    height: 120,
    width: 120,
    padding: 10,
    overflow: 'hidden',
    backgroundColor: COLORS.gray,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: COLORS.gray,
  },
  avatarImageContainer: {
    alignItems: 'center',
    overflow: 'hidden',
  },
  avatarImage: {height: 120, width: 120},
});
