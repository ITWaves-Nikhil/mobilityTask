import {View, Text, Pressable} from 'react-native';
import React from 'react';

const PrimaryButton = ({title, color, onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <View>
        <Text>{title}</Text>
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({});
export default PrimaryButton;
