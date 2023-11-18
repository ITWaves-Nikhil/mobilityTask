import {View, Text, TextInput, StyleSheet} from 'react-native';
import React, {forwardRef} from 'react';
import {styles} from './styles';
import {COLORS} from '../../../constants/theme';

const Input = forwardRef(function MyInput(
  {label, config, onChangeText, nextElement, onFocus, onBlur},
  ref,
) {
  return (
    <View style={!!label ? styles.transparentBorder : styles.inputContainer}>
      {label && <Text style={styles.labelText}>{label}</Text>}
      <TextInput
        style={[!!label ? styles.hidden : styles.textInput]}
        {...config}
        placeholderTextColor={COLORS.black_faded}
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

export default Input;
