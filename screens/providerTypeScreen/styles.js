import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../constants/theme';

export const styles = StyleSheet.create({
  userMenuContainer: {gap: 15, flex: 1, marginTop: 50},
  headerContainer: {padding: 8},
  headerText: {
    color: COLORS.black,
    fontSize: 20,
    fontFamily: FONTS.BOOK,
  },
  cardsContainer: {gap: 20, flex: 1},
});
