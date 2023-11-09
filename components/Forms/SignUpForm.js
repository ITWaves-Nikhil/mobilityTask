import React, {useState} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';

import Input from './Input';
import Icon from './Icon';
import RadioButton from './RadioButton';
import PressableIcon from './Icon';
import PrimaryButton from '../ui/PrimaryButton';
import {FORM_ICONS} from '../../constants/assets';
import {colors} from '../../constants/GlobalStyles';
import Avatar from '../ui/Avatar';

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  function passwordVisibleHandler() {
    setShowPassword(visible => !visible);
  }
  return (
    <>
      <Avatar />
      <View style={styles.inputContainer}>
        <Icon source={FORM_ICONS.email} />
        <Input config={{placeholder: 'First Name*'}} />
      </View>
      <View style={styles.inputContainer}>
        <Icon source={FORM_ICONS.email} />
        <Input config={{placeholder: 'Last Name*'}} />
      </View>

      <View style={styles.inputContainer}>
        <Icon source={FORM_ICONS.gender} />
        <Input label={'Gender*'} config={{}} />
      </View>
      <View
        style={{flexDirection: 'row', gap: 10, justifyContent: 'flex-start'}}>
        <RadioButton label={'Male'} />
        <RadioButton label={'Female'} />
        <RadioButton label={'Others'} />
      </View>
      <View style={styles.inputContainer}>
        <Icon source={FORM_ICONS.birthday} />
        <Input config={{placeholder: 'Birthday*'}} />
        <Icon source={FORM_ICONS.calendar} />
      </View>
      <View style={styles.inputContainer}>
        <Icon source={FORM_ICONS.address} />
        <Input config={{placeholder: 'Address*'}} />
      </View>
      <View style={styles.inputContainer}>
        <Icon source={FORM_ICONS.address} />
        <Input config={{placeholder: 'City*'}} />
      </View>
      <View style={styles.inputContainer}>
        <Icon source={FORM_ICONS.address} />
        <Input config={{placeholder: 'State*'}} />
      </View>
      <View style={styles.inputContainer}>
        <Icon source={FORM_ICONS.address} />
        <Input config={{placeholder: 'Postcode'}} />
      </View>
      <View style={styles.inputContainer}>
        <Icon source={FORM_ICONS.address} />
        <Input config={{placeholder: 'Country*'}} />
      </View>
      <View style={styles.inputContainer}>
        <Icon source={FORM_ICONS.address} />
        <Input config={{placeholder: 'Mobile*'}} />
      </View>
      <View style={styles.inputContainer}>
        <Icon source={FORM_ICONS.address} />
        <Input config={{placeholder: 'Alternate Mobile*'}} />
      </View>
      <View style={styles.inputContainer}>
        <Icon source={FORM_ICONS.email} />
        <Input config={{placeholder: 'Email*'}} />
      </View>
      <View style={styles.inputContainer}>
        <Icon source={FORM_ICONS.passwrord_lock} />
        <Input
          config={{
            placeholder: 'Password*',
            secureTextEntry: showPassword ? false : true,
          }}
        />
        <PressableIcon
          onPress={passwordVisibleHandler}
          source={
            showPassword
              ? FORM_ICONS.passwrord_eye_open
              : FORM_ICONS.passwrord_eye_closed
          }
        />
      </View>
      <PrimaryButton title={'Sign Up'} color={colors.cardBlue} />
    </>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
});

export default SignUpForm;
