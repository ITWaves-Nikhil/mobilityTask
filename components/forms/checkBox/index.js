import React, {useState} from 'react';
import {View, Text, Pressable, Image} from 'react-native';
import {FORM_ICONS} from '../../../constants/assets';
import {styles} from './styles';

const CheckBox = ({label, color, onPress}) => {
  const [isChecked, setIsChecked] = useState(false);

  function handleRadioPress() {
    setIsChecked(prevState => !prevState);
    onPress();
  }

  return (
    <Pressable style={styles.radio} onPress={handleRadioPress}>
      <View
        style={
          isChecked
            ? [styles.outerCircle, {borderColor: color}]
            : styles.outerCircle
        }>
        <Image
          style={isChecked ? styles.innerCircle : styles.hidden}
          source={FORM_ICONS.check}
        />
      </View>
      <Text style={styles.labelText}>{label}</Text>
    </Pressable>
  );
};

export default CheckBox;
