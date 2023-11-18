import React from 'react';
import {Image, Pressable} from 'react-native';
import {styles} from './styles';

const PressableIcon = ({source, onPress}) => {
  return (
    <Pressable style={styles.iconContainer} onPress={onPress}>
      <Image source={source} style={styles.icon} />
    </Pressable>
  );
};

export default PressableIcon;
