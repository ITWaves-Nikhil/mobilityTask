import {View, Text, Pressable} from 'react-native';
import {styles} from './styles';

const RadioButton = ({label, checked, onPress}) => {
  return (
    <Pressable style={styles.radio} onPress={onPress} hitSlop={{}}>
      <View
        style={
          checked ? [styles.outerCircle, styles.selected] : styles.outerCircle
        }>
        <View style={styles.innerCircle}></View>
      </View>
      <Text style={styles.labelText}>{label}</Text>
    </Pressable>
  );
};

export default RadioButton;
