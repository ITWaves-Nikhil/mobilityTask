import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import {colors} from '../../constants/GlobalStyles';
import {FORM_ICONS} from '../../constants/assets';

const CheckBox = ({label, color}) => {
  const [isChecked, setIsChecked] = useState(false);

  function handleRadioPress() {
    console.log(isChecked);
    setIsChecked(prevState => !prevState);
  }

  return (
    <Pressable
      style={isChecked ? [styles.radio, {borderColor: color}] : styles.radio}
      onPress={handleRadioPress}
      hitSlop={{}}>
      <View style={isChecked ? [styles.outerCircle] : styles.outerCircle}>
        <Image
          style={isChecked ? styles.innerCircle : {display: 'none'}}
          source={FORM_ICONS.check}
        />
      </View>
      <Text style={styles.labelText}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  radio: {padding: 8, flexDirection: 'row'},
  outerCircle: {
    borderColor: 'black',
    borderWidth: 1,
    height: 20,
    width: 20,
    // borderRadius: 20,
    justifyContent: 'center',
    overflow: 'hidden',
    alignItems: 'center',
  },
  innerCircle: {
    objectFit: 'contain',
    height: 25,
    width: 25,
  },
  labelText: {color: 'black'},
});
export default CheckBox;
