import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

const Icon = ({source}) => {
  return (
    <View style={styles.iconContainer}>
      <Image source={source} style={styles.icon} resizeMode="contain" />
    </View>
  );
};
const styles = StyleSheet.create({
  iconContainer: {padding: 2},
  icon: {height: 18, width: 18, marginRight: 4},
});
export default Icon;
