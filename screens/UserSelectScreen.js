import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';

import {UserTypes} from '../constants/Strings';
import {colors} from '../constants/GlobalStyles';

import UserTypeCard from '../components/ui/UserTypeCard';
import CommonBg from '../components/shared/CommonBg';
import Logo from '../components/ui/Logo';
import {paths} from '../constants/assets';

const UserSelectScreen = ({route, navigation}) => {
  function providerTypeHandler() {
    navigation.navigate('ProviderType');
  }
  function patientHandler() {
    navigation.navigate('FormScreen', {formType: 'login', userType: 'patient'});
  }
  function staffHandler() {
    navigation.navigate('FormScreen', {formType: 'login', userType: 'staff'});
  }

  return (
    <CommonBg>
      <StatusBar
        animated={true}
        backgroundColor={'white'}
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
            color={colors.blue}
            text={UserTypes.provider.desc}
            onPress={providerTypeHandler}
          />
          <UserTypeCard
            source={paths.PATIENTS_LOGO}
            title={UserTypes.patients.title}
            color={colors.orange}
            text={UserTypes.patients.desc}
            onPress={patientHandler}
          />
          <UserTypeCard
            source={paths.STAFF_LOGO}
            title={UserTypes.staff.title}
            color={colors.rust}
            text={UserTypes.staff.desc}
            onPress={staffHandler}
          />
        </View>
      </View>
    </CommonBg>
  );
};

const styles = StyleSheet.create({
  userMenuContainer: {flex: 1},
  headerContainer: {padding: 8, marginVertical: 10},
  headerText: {color: 'black', fontSize: 20, fontWeight: 'bold'},
  cardContainer: {gap: 20, flex: 1, padding: 4},
});
export default UserSelectScreen;
