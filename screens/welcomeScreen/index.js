import {View, Text, ImageBackground, Image, StatusBar} from 'react-native';
import PrimayButton from '../../components/ui/primaryButton/index';
import ListItem from '../../components/ui/listItem/index';
import {styles} from './styles';

import {paths} from '../../constants/assets';
import {COLORS} from '../../constants/theme';
import {NAVIGATION} from '../../constants/navigation';
import {
  PRIMARY_BUTTON_TITLES,
  LIST_ITEM_TITLES,
  STATIC_TEXTS,
  USER_TYPES,
} from '../../constants/strings';

const WelcomeScreen = ({navigation}) => {
  function getStartedHandler() {
    navigation.navigate(NAVIGATION.SCREEN_NAMES.USER_SELECT);
  }
  function loginAsGuestHandler() {
    navigation.navigate(NAVIGATION.SCREEN_NAMES.HOME_SCREEN, {
      userType: USER_TYPES.guest,
    });
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
        source={paths.WELCOME_BG}
        resizeMode="cover"
        style={styles.backgoundImage}>
        <View style={styles.rootContainer}>
          <View style={styles.logoContainer}>
            <Image
              style={styles.logoImage}
              source={paths.TRANPARENT_LOGO}
              resizeMode="contain"
            />
          </View>
          <View style={styles.optionsContainer}>
            <ListItem
              source={paths.MOBILITY_CLINIC}
              title={LIST_ITEM_TITLES.mobility_clinic}
            />
            <ListItem
              source={paths.IDEAL_HEALTHCARE}
              title={LIST_ITEM_TITLES.ideal_healthcare}
            />
            <ListItem
              source={paths.REHAB_SVCS}
              title={LIST_ITEM_TITLES.mobility_rehab}
            />
            <ListItem
              source={paths.GREEN_PROSTHETICS}
              title={LIST_ITEM_TITLES.greeen_prosthetics}
            />
            <ListItem
              source={paths.CARE_CRAFTERS}
              title={LIST_ITEM_TITLES.care_crafters}
            />
          </View>
          <View style={styles.summaryContainer}>
            <Text style={styles.summaryText}>{STATIC_TEXTS.summaryText}</Text>
          </View>
          <View style={styles.buttonsContainer}>
            <PrimayButton
              title={PRIMARY_BUTTON_TITLES.getStarted}
              onPress={getStartedHandler}
              color={COLORS.blue}
            />
            <PrimayButton
              title={PRIMARY_BUTTON_TITLES.loginAsGuest}
              onPress={loginAsGuestHandler}
              color={COLORS.green}
            />
          </View>
        </View>
      </ImageBackground>
    </>
  );
};

export default WelcomeScreen;
