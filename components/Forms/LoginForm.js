import React, {useState, useRef} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {FORM_ICONS} from '../../constants/assets';

import Icon from './Icon';
import Input from './Input';
import Logo from '../ui/Logo';
import PrimaryButton from '../ui/PrimaryButton';
import FlatButton from '../ui/FlatButton';
import PressableIcon from './PressableIcon';
import {colors} from '../../constants/GlobalStyles';
import {validatePassword, validateEmail} from '../../util/Validators';
import {regex} from '../../constants/Regex';

const LoginForm = () => {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();

  function signupButtonHandler() {
    navigation.navigate('FormScreen', {formType: 'signup'});
  }

  function passwordVisibleHandler() {
    setShowPassword(visible => !visible);
  }

  function emailInputHandler(value) {
    setEmail(value);
    errors.email = validateEmail(value);
  }

  function passwordInputHandler(value) {
    setPassword(value);
    errors.password = validatePassword(value);
  }

  return (
    <View style={styles.rootContainer}>
      <View style={{gap: 10}}>
        <Logo />

        {/* email input  */}
        <View
          style={
            !!errors.email
              ? [styles.inputContainer, {borderColor: 'red'}]
              : styles.inputContainer
          }>
          <Icon source={FORM_ICONS.email} />
          <Input
            config={{
              placeholder: 'Email*',
              returnKeyType: 'next',
            }}
            ref={emailRef}
            nextElement={passwordRef}
            value={email}
            onChangeText={emailInputHandler}
          />
        </View>
        {!!errors.email && <Text style={{color: 'red'}}>{errors.email}</Text>}

        {/* password input  */}
        <View
          style={
            !!errors.password
              ? [styles.inputContainer, {borderColor: 'red'}]
              : styles.inputContainer
          }>
          <Icon source={FORM_ICONS.passwrord_lock} />
          <Input
            config={{
              placeholder: 'Password*',
              secureTextEntry: showPassword ? false : true,
              returnKeyType: 'next',
            }}
            ref={passwordRef}
            value={password}
            onChangeText={passwordInputHandler}
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
        {!!errors.password && (
          <Text style={{color: 'red'}}>{errors.password}</Text>
        )}

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
      </View>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.grayText}>By tapping i agree to the </Text>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <FlatButton title={'Service Terms'} style={{color: 'black'}} />
          <Text style={styles.grayText}> and </Text>
          <FlatButton title={'Privacy Policy'} style={{color: 'black'}} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {flex: 1, justifyContent: 'space-between'},
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
  },
  grayText: {color: '#ccc'},
  signupContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'baseline',
    flexDirection: 'row',
  },
});
export default LoginForm;
