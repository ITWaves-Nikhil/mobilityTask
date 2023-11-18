import React from 'react';
import {View, Image} from 'react-native';
import {styles} from './styles';

const Icon = ({source}) => {
  return (
    <View style={styles.iconContainer}>
      <Image source={source} style={styles.icon} resizeMode="contain" />
    </View>
  );
};

export default Icon;
