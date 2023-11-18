import {View, StatusBar, Text, BackHandler} from 'react-native';
import PrimaryButton from '../../components/ui/primaryButton/index';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../../constants/theme';
import {useEffect} from 'react';
import {styles} from './styles';
import {NAVIGATION} from '../../constants/navigation';
import {PRIMARY_BUTTON_TITLES} from '../../constants/strings';

const HomeScreen = ({route}) => {
  const navigation = useNavigation();

  useEffect(() => {
    const handleBackButton = () => {
      return true;
    };
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
    };
  }, []);

  function logoutHandler() {
    navigation.navigate(NAVIGATION.SCREEN_NAMES.WELCOME_SCREEN);
  }
  const userData = route.params?.userInfo;
  const guestUser = route.params?.userType === 'Guest';
  console.log(userData);
  return (
    <View style={styles.rootContainer}>
      <StatusBar
        animated={true}
        backgroundColor={COLORS.white}
        barStyle={'dark-content'}
      />
      <View style={styles.userDetailContainer}>
        {guestUser && <Text style={styles.detailText}>Welcome Guest</Text>}
      </View>
      <PrimaryButton
        title={PRIMARY_BUTTON_TITLES.logout}
        color={COLORS.red}
        onPress={logoutHandler}
      />
    </View>
  );
};

export default HomeScreen;
