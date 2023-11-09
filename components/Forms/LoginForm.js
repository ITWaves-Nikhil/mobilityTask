import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {FORM_ICONS} from '../../constants/assets';

import Icon from './Icon';
import Input from './Input';
import Logo from '../ui/Logo';
import RadioButton from './RadioButton';
import PrimaryButton from '../ui/PrimaryButton';
import FlatButton from '../ui/FlatButton';
import PressableIcon from './PressableIcon';
import {colors} from '../../constants/GlobalStyles';

const LoginForm = () => {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);

  function signupButtonHandler() {
    navigation.navigate('FormScreen', {formType: 'signup'});
  }

  function passwordVisibleHandler() {
    setShowPassword(visible => !visible);
  }
  return (
    <>
      <Logo />
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

      <FlatButton title={'Forgot Password?'} style={{color: 'black'}} />
      <PrimaryButton title={'Login'} color={colors.cardBlue} />
      <View style={styles.signupContainer}>
        <Text style={{color: 'black'}}>Don't have an account? </Text>
        <FlatButton
          title={'Sign Up'}
          style={{color: colors.blue}}
          onPress={signupButtonHandler}
        />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  signupContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'baseline',
    flexDirection: 'row',
  },
});
export default LoginForm;
