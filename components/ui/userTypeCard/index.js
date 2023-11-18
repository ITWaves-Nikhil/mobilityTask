import {Text, View, Image, Pressable} from 'react-native';
import {styles} from './styles';

const UserTypeCard = ({source, title, color, text, onPress}) => {
  const mergedStyle = [styles.userCardContainer, {backgroundColor: color}];

  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) =>
        pressed ? [...mergedStyle, styles.pressed] : mergedStyle
      }>
      <View style={styles.iconContainer}>
        <Image style={styles.iconImage} source={source} />
      </View>
      <View style={styles.userTypeContainer}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.whiteText}>{text}</Text>
      </View>
    </Pressable>
  );
};

export default UserTypeCard;
