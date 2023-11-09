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
          />
          <UserTypeCard
            source={paths.STAFF_LOGO}
            title={UserTypes.staff.title}
            color={colors.rust}
            text={UserTypes.staff.desc}
          />
        </View>
      </View>
    </CommonBg>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    backgroundColor: 'white',
  },
  backgoundImage: {
    flex: 1,
    objectFit: 'cover',
    width: '200%',
    borderWidth: 4,
    right: '-50%',
    top: '-50%',
  },
  innerContainer: {
    flex: 1,
    width: '100%',
    position: 'absolute',
    padding: 15,
    gap: 10,
  },

  userMenuContainer: {gap: 10},
  headerContainer: {padding: 8},
  headerText: {color: 'black', fontSize: 20, fontWeight: 'bold'},
  cardContainer: {gap: 10},
});
export default UserSelectScreen;
