import {View, Image, StyleSheet} from 'react-native';
import React from 'react';
import logo from '../../assets/Icons_Images/png/app-logo.png';

const Logo = () => {
  return (
    <View style={styles.logoContainer}>
      <Image style={styles.logoImage} source={logo} />
    </View>
  );
};
const styles = StyleSheet.create({
  logoImage: {},
  logoContainer: {width: '100%', alignItems: 'center', paddingTop: 100},
});
export default Logo;
