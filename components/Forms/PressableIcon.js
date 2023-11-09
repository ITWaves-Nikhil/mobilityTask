import React from 'react';
import {View, StyleSheet, Image, Pressable} from 'react-native';

const PressableIcon = ({source, onPress}) => {
  return (
    <Pressable style={styles.iconContainer} onPress={onPress}>
      <Image source={source} style={styles.icon} />
    </Pressable>
  );
};
const styles = StyleSheet.create({
  iconContainer: {padding: 4},
  icon: {height: 20, width: 20, objectFit: 'contain'},
});
export default PressableIcon;
