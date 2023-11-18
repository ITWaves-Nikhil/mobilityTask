import {View, Image} from 'react-native';
import {paths} from '../../../constants/assets';
import {styles} from './styles';

const CommonBg = ({children}) => {
  return (
    <View style={styles.rootContainer}>
      <Image
        resizeMode="cover"
        source={paths.COMMON_BG}
        style={styles.backgoundImage}
      />
      <View style={styles.innerContainer}>{children}</View>
    </View>
  );
};

export default CommonBg;
