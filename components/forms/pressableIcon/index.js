import React from 'react';
import {Image, Pressable} from 'react-native';
import {styles} from './styles';

const PressableIcon = ({source, onPress,size}) => {
  return (
    <Pressable style={styles.iconContainer} onPress={onPress}>
      <Image source={source} style={[styles.icon,{height:size,width:size}]} />
    </Pressable>
  );
};

export default PressableIcon;
