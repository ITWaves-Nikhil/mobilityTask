import {View, Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';

const FlatButton = ({title, style, onPress}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) =>
        pressed ? [styles.button, styles.pressed] : [styles.button]
      }>
      <Text style={[styles.btnTitle, style]}>{title}</Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  button: {padding: 2},
  pressed: {opacity: 0.6},
  btnTitle: {textAlign: 'right', fontWeight: 'bold'},
});
export default FlatButton;
