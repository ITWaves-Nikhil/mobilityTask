import React, {useState, useRef} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {FORM_ICONS} from '../../constants/assets';

import Icon from './Icon';
import Input from './Input';
import Logo from '../ui/Logo';
import Error from './Error';
import PrimaryButton from '../ui/PrimaryButton';
import FlatButton from '../ui/FlatButton';
import PressableIcon from './PressableIcon';
import {PLACEHOLDERS} from '../../constants/Strings';
import {colors} from '../../constants/GlobalStyles';
import {validatePassword, validateEmail} from '../../util/Validators';

const LoginForm = ({userType, providerType}) => {
  // console.log('login form=>', userType, providerType);
  const navigation = useNavigation();
  const [formInputs, setFormInputs] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();

  function signupButtonHandler() {
    navigation.navigate('FormScreen', {
      formType: 'signup',
      userType: userType,
      providerType: providerType,
    });
  }

  function passwordVisibleHandler() {
    setShowPassword(visible => !visible);
  }

  function inputHandler(identifier, value) {
    setFormInputs(prevInputs => ({...prevInputs, [identifier]: value}));
    validateInputs(identifier, value);
  }

  function validateInputs(identifier, value) {
    if (identifier === 'email') {
      setErrors(prevErrors => ({
        ...prevErrors,
        [identifier]: validateEmail(value),
      }));
    } else if (identifier === 'password') {
      setErrors(prevErrors => ({
        ...prevErrors,
        [identifier]: validatePassword(value),
      }));
    }
  }

  function onSubmitHandler() {
    setErrors(prevErrors => ({
      ...prevErrors,
      email: validateEmail(formInputs.email),
      password: validatePassword(formInputs.password),
    }));

    let noErrors = false;
    for (const key in errors) {
      if (
        errors[key] === '' ||
        errors[key] === undefined ||
        errors[key] === null
      ) {
        noErrors = true;
      } else {
        noErrors = false;
        break;
      }
    }
    if (noErrors) {
      // console.log('no errors');
    }
  }
  return (
    <View style={styles.rootContainer}>
      <View style={styles.mainContainer}>
        <Logo />

        {/* email input  */}
        <View
          style={
            !!errors.email
              ? [styles.inputContainer, {borderColor: 'red'}]
              : formInputs?.email?.isFocused
              ? [styles.inputContainer, {borderColor: 'blue'}]
              : styles.inputContainer
          }>
          <Icon source={FORM_ICONS.email} />
          <Input
            config={{
              placeholder: PLACEHOLDERS.email,
              returnKeyType: 'next',
            }}
            ref={emailRef}
            nextElement={passwordRef}
            value={formInputs?.email}
            onChangeText={inputHandler.bind(this, 'email')}
          />
        </View>
        {!!errors.email && <Error message={errors.email} />}

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
              placeholder: PLACEHOLDERS.password,
              secureTextEntry: showPassword ? false : true,
              returnKeyType: 'next',
            }}
            ref={passwordRef}
            value={formInputs?.password}
            onChangeText={inputHandler.bind(this, 'password')}
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
        {!!errors.password && <Error message={errors.password} />}

        <FlatButton title={'Forgot Password?'} style={{color: 'black'}} />
        <PrimaryButton
          title={'Login'}
          color={colors.cardBlue}
          onPress={onSubmitHandler}
        />
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
  mainContainer: {gap: 10},
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
