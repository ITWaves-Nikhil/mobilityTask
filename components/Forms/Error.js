import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Error = ({message}) => {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.errorText}>{message}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  rootContainer: {paddingHorizontal: 2},
  errorText: {color: 'red', padding: 2, fontSize: 12},
});
export default Error;
