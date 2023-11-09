import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';

const Input = ({label, config}) => {
  return (
    <View
      style={!!label ? {borderColor: 'transparent'} : styles.inputContainer}>
      {label && <Text style={styles.labelText}>{label}</Text>}
      <TextInput
        style={!!label ? {display: 'none'} : styles.textInput}
        {...config}
        placeholderTextColor={'#ccc'}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
    flex: 1,
  },
  labelText: {
    color: 'black',
  },
  textInput: {color: 'black', backgroundColor: 'white'},
});
export default Input;
