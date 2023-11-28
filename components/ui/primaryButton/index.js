import {styles} from './styles';
import {View, Text, Pressable} from 'react-native';

const PrimaryButton = ({title, color, onPress, disabled,size}) => {
  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={
        disabled
          ? [styles.button, styles.disabled]
          : ({pressed}) =>
              pressed
                ? [styles.button, styles.pressed, {backgroundColor: color}]
                : [styles.button, {backgroundColor: color}]
      }>
      <View style={styles.textContainer}>
        <Text style={styles.btnTitle}>{title}</Text>
      </View>
    </Pressable>
  );
};

export default PrimaryButton;
