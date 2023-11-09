import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {colors} from '../../constants/GlobalStyles';

const RadioButton = ({label}) => {
  const [isChecked, setIsChecked] = useState(false);

  function handleRadioPress() {
    console.log(isChecked);
    setIsChecked(prevState => !prevState);
  }

  return (
    <Pressable style={styles.radio} onPress={handleRadioPress} hitSlop={{}}>
      <View
        style={
          isChecked ? [styles.outerCircle, styles.selected] : styles.outerCircle
        }>
        <View style={styles.innerCircle}></View>
      </View>
      <Text style={styles.labelText}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  radio: {padding: 8, flexDirection: 'row', gap: 10},
  outerCircle: {
    borderColor: 'black',
    borderWidth: 1,
    height: 20,
    width: 20,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selected: {
    backgroundColor: colors.cardBlue,
    borderColor: colors.cardBlue,
  },
  innerCircle: {
    backgroundColor: 'white',
    height: 10,
    width: 10,
    borderRadius: 20,
  },
  labelText: {color: 'black'},
});
export default RadioButton;
