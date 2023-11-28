import { View, Image } from 'react-native';
import { FORM_ICONS } from '../../../constants/assets';
import { styles } from './styles';

const Avatar = ({ source }) => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.avatarImageContainer}>
        <Image
          style={styles.avatarImage}
          source={!!source ? { uri: source } : FORM_ICONS.avatar_placeholder}
          resizeMode='cover'
        />
      </View>
    </View>
  );
};

export default Avatar;
