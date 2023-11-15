import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  StatusBar,
} from 'react-native';

import bg from '../assets/Icons_Images/png/bg.png';
import {paths} from '../constants/assets';
import logo from '../assets/Icons_Images/png/app-logo.png';
import {colors} from '../constants/GlobalStyles';
import PrimayButton from '../components/ui/PrimaryButton';
import ListItem from '../components/ui/ListItem';

const WelcomeScreen = ({route, navigation}) => {
  function getStartedHandler() {
    navigation.navigate('UserSelect');
  }
  function loginAsGuestHandler() {
    navigation.navigate('FormScreen', {formType: 'login', userType: 'guest'});
  }
  return (
    <>
      <StatusBar
        animated={true}
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'light-content'}
      />
      <ImageBackground
        source={bg}
        resizeMode="cover"
        style={styles.backgoundImage}>
        <View style={styles.rootContainer}>
          <View style={styles.logoContainer}>
            <Image style={styles.logoImage} source={logo} />
          </View>
          <View style={styles.optionsContainer}>
            <ListItem
              source={paths.MOBILITY_CLINIC}
              title={'Mobility Clinic'}
            />
            <ListItem
              source={paths.IDEAL_HEALTHCARE}
              title={'Ideal Healthcare'}
            />
            <ListItem source={paths.REHAB_SVCS} title={'Mobility Rehab SVCS'} />
            <ListItem
              source={paths.GREEN_PROSTHETICS}
              title={'Green Prosthetics'}
            />
            <ListItem source={paths.CARE_CRAFTERS} title={'Care Crafters'} />
          </View>
          <View style={styles.summaryContainer}>
            <Text style={styles.summaryText}>
              Care with Personal Touch and Integrity Provide the most
              appropriate and value based care all the time. We are just an
              appointment away For your world class care!
            </Text>
          </View>
          <View style={styles.buttonsContainer}>
            <PrimayButton
              title="Get Started"
              onPress={getStartedHandler}
              color={colors.blue}
            />
            <PrimayButton
              title="Login as Guest"
              onPress={loginAsGuestHandler}
              color={colors.green}
            />
          </View>
        </View>
      </ImageBackground>
    </>
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
  },
  backgoundImage: {
    flex: 1,
  },
  logoImage: {},
  logoContainer: {width: '100%', alignItems: 'center'},
  summaryText: {fontSize: 16, textAlign: 'center', color: 'white'},
  optionsContainer: {width: '100%'},
  summaryContainer: {width: '100%', padding: 10},
  buttonsContainer: {width: '100%', gap: 10},
});
export default WelcomeScreen;
