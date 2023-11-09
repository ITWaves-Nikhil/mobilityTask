import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

const Icon = ({source}) => {
  return (
    <View style={styles.iconContainer}>
      <Image source={source} style={styles.icon} />
    </View>
  );
};
const styles = StyleSheet.create({
  iconContainer: {padding: 4},
  icon: {height: 15, width: 15, objectFit: 'contain'},
});
export default Icon;
