import {Text, Pressable} from 'react-native';
import {styles} from './styles';

const FlatButton = ({title, style, onPress,size}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) =>
        pressed ? [styles.button, styles.pressed] : [styles.button]
      }>
      <Text style={[styles.btnTitle, style]}>{title}</Text>
    </Pressable>
  );
};

export default FlatButton;
