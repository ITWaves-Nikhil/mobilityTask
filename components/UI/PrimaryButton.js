import {View, Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';

const PrimaryButton = ({title, color, onPress, disabled}) => {
  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={({pressed}) =>
        pressed
          ? [styles.button, styles.pressed, {backgroundColor: color}]
          : [styles.button, {backgroundColor: color}]
      }>
      <View style={styles.textContainer}>
        <Text style={styles.btnTitle}>{title}</Text>
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  button: {
    width: '80%',
    alignSelf: 'center',
    borderRadius: 4,
    elevation: 20,
    shadowOffset: {height: 0, width: 0},
    shadowColor: '#000',
    shadowOpacity: 0.7,
  },
  textContainer: {padding: 12},
  pressed: {opacity: 0.6},
  btnTitle: {color: 'white', textAlign: 'center', fontSize: 16},
});
export default PrimaryButton;
