import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/theme';

export const styles = StyleSheet.create({
  userMenuContainer: {flex: 1},
  headerContainer: {padding: 8, marginVertical: 10},
  headerText: {
    color: COLORS.black,
    fontSize: 20,
    fontFamily: 'AvenirLTStd-Book',
  },
  cardContainer: {gap: 20, flex: 1, padding: 4},
});
