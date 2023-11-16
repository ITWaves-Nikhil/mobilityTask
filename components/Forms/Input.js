import {View, Text, TextInput, StyleSheet} from 'react-native';
import React, {forwardRef} from 'react';

const Input = forwardRef(function MyInput(
  {label, config, onChangeText, nextElement, isFocused, onFocus, onBlur},
  ref,
) {
  return (
    <View
      style={!!label ? {borderColor: 'transparent'} : styles.inputContainer}>
      {label && <Text style={styles.labelText}>{label}</Text>}
      <TextInput
        style={[!!label ? {display: 'none'} : styles.textInput]}
        {...config}
        placeholderTextColor={isFocused ? 'rgba(0,0,255,.7)' : 'rgba(0,0,0,.7)'}
        ref={ref}
        onChangeText={onChangeText}
        onFocus={onFocus}
        onBlur={onBlur}
        blurOnSubmit={false}
        onSubmitEditing={() => {
          nextElement ? nextElement.current.focus() : '';
        }}
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
