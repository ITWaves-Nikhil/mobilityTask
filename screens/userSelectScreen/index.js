import {View, Text, StatusBar} from 'react-native';

import {UserTypes} from '../../constants/strings';
import {COLORS} from '../../constants/theme';

import Logo from '../../components/ui/logo/index';
import UserTypeCard from '../../components/ui/userTypeCard/index';
import CommonBg from '../../components/shared/commonBg';
import {paths} from '../../constants/assets';
import {styles} from './styles';
import {NAVIGATION} from '../../constants/navigation';

const UserSelectScreen = ({route, navigation}) => {
  function providerTypeHandler() {
    navigation.navigate(NAVIGATION.SCREEN_NAMES.PROVIDER_TYPE);
  }
  function patientHandler() {
    navigation.navigate(NAVIGATION.SCREEN_NAMES.FORM_SCREEN, {
      formType: 'login',
      userType: 'patient',
    });
  }
  function staffHandler() {
    navigation.navigate(NAVIGATION.SCREEN_NAMES.FORM_SCREEN, {
      formType: 'login',
      userType: 'staff',
    });
  }

  return (
    <CommonBg>
      <StatusBar
        animated={true}
        backgroundColor={COLORS.white}
        barStyle={'dark-content'}
      />
      <Logo />
      <View style={styles.userMenuContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Select User Type</Text>
        </View>
        <View style={styles.cardContainer}>
          <UserTypeCard
            source={paths.PROVIDER_LOGO}
            title={UserTypes.provider.title}
            color={COLORS.blue}
            text={UserTypes.provider.desc}
            onPress={providerTypeHandler}
          />
          <UserTypeCard
            source={paths.PATIENTS_LOGO}
            title={UserTypes.patients.title}
            color={COLORS.orange}
            text={UserTypes.patients.desc}
            onPress={patientHandler}
          />
          <UserTypeCard
            source={paths.STAFF_LOGO}
            title={UserTypes.staff.title}
            color={COLORS.rust}
            text={UserTypes.staff.desc}
            onPress={staffHandler}
          />
        </View>
      </View>
    </CommonBg>
  );
};

export default UserSelectScreen;
