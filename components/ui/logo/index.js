import {View, Image} from 'react-native';
import {styles} from './styles';
import {paths} from '../../../constants/assets';

const Logo = () => {
  return (
    <View style={styles.logoContainer}>
      <Image style={styles.logoImage} source={paths.LOGO} />
    </View>
  );
};

export default Logo;
