import { StyleSheet } from 'react-native';
import { COLORS } from '../../../constants/theme';
export const styles = StyleSheet.create({
  rootContainer: {
    alignSelf: 'center',
    height: 130,
    width: 130,
    padding: 8,
    overflow: 'hidden',
    backgroundColor: COLORS.cardBlue_50,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: COLORS.blue,
  },
  avatarImageContainer: {
    flex: 1,
    borderRadius: 120,
    backgroundColor: COLORS.gray,
    // borderWidth:1,
    alignItems: 'center',
    overflow: 'hidden',
  },
  avatarImage: { height: 120, width: 120, },
});
