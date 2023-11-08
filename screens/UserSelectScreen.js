import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import UserTypeCard from '../components/UI/UserTypeCard';
import logo from '../assets/Icons_Images/png/app-logo.png';
import CommonBg from '../components/shared/CommonBg';

const UserSelectScreen = ({route, navigation}) => {
  function providerTypeHandler() {
    navigation.navigate('ProviderType');
  }

  return (
    <CommonBg>
      <View style={styles.logoContainer}>
        <Image style={styles.logoImage} source={logo} />
      </View>
      <View style={styles.userMenuContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Select User Type</Text>
        </View>
        <View style={styles.cardContainer}>
          <UserTypeCard
            title={'Providers'}
            color={'blue'}
            text={'abc'}
            onPress={providerTypeHandler}
          />
          <UserTypeCard title={'Patients'} color={'orange'} text={'abc'} />
          <UserTypeCard title={'Staff'} color={'brown'} text={'abc'} />
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
  logoImage: {},
  logoContainer: {width: '100%', alignItems: 'center'},
  userMenuContainer: {gap: 10},
  headerContainer: {padding: 8},
  headerText: {color: 'black', fontSize: 20, fontWeight: 'bold'},
  cardContainer: {gap: 10},
});
export default UserSelectScreen;
