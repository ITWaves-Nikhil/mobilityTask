import {View, Text, TextInput, StyleSheet} from 'react-native';
import React, {forwardRef} from 'react';

const Input = forwardRef(function MyInput(
  {label, config, onChangeText, nextElement},
  ref,
) {
  return (
    <View
      style={!!label ? {borderColor: 'transparent'} : styles.inputContainer}>
      {label && <Text style={styles.labelText}>{label}</Text>}
      <TextInput
        ref={ref}
        onSubmitEditing={() => {
          nextElement ? nextElement.current.focus() : '';
        }}
        style={[!!label ? {display: 'none'} : styles.textInput]}
        {...config}
        placeholderTextColor={'rgba(0,0,0,.7)'}
        onChangeText={onChangeText}
        blurOnSubmit={false}
      />
    </View>
  );
});
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
  },
  labelText: {
    color: 'black',
  },
  textInput: {color: 'black', backgroundColor: 'white'},
  invalid: {backgroundColor: 'red'},
});
export default Input;
