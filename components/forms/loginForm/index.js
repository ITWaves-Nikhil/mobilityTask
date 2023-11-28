import React, {useState, useRef} from 'react';
import {Text, View, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {FORM_ICONS} from '../../../constants/assets';
import {useSelector} from 'react-redux';
import {findUser} from '../../../util/Helpers';
import {styles} from './styles';
import {FORM_FIELDS_IDENTIFIERS} from '../../../constants/enums';
import {
  ERRORS,
  FLAT_BUTTON_TITLES,
  PRIMARY_BUTTON_TITLES,
  PLACEHOLDERS,
  STATIC_TEXTS,
  FORM_PARAMS_TITLES,
} from '../../../constants/strings';

import Icon from '../icon/index';
import Input from '../input/index';
import Logo from '../../ui/logo/index';
import Error from '../error/index';
import PrimaryButton from '../../ui/primaryButton/index';
import FlatButton from '../../ui/flatButton/index';
import PressableIcon from '../pressableIcon/index';
import {COLORS} from '../../../constants/theme';
import {NAVIGATION} from '../../../constants/navigation';
import {validatePassword, validateEmail} from '../../../util/Validators';

const LoginForm = ({userType, providerType}) => {
  const navigation = useNavigation();
  const [formInputs, setFormInputs] = useState({
    email: '',
    password: '',
  });
  const [blurredFields, setBlurredFields] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const users = useSelector(state => state.auth.users);

  const emailRef = useRef();
  const passwordRef = useRef();

  function signupButtonHandler() {
    navigation.navigate(NAVIGATION.SCREEN_NAMES.FORM_SCREEN, {
      formType: FORM_PARAMS_TITLES.signup,
      userType: userType,
      providerType: providerType,
    });
  }

  function passwordVisibleHandler() {
    setShowPassword(visible => !visible);
  }

  function inputHandler(identifier, value) {
    setFormInputs(prevInputs => ({...prevInputs, [identifier]: value}));
    if (blurredFields[identifier]) {
      validateInputs(identifier, value);
    }
  }

  function validateInputs(identifier, value) {
    if (identifier === FORM_FIELDS_IDENTIFIERS.email) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [identifier]: validateEmail(value),
      }));
    } else if (identifier === FORM_FIELDS_IDENTIFIERS.password) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [identifier]: validatePassword(value),
      }));
    }
  }
  function fieldOnBlurHandler(identifier) {
    setBlurredFields(fields => ({...fields, [identifier]: true}));
    validateInputs(identifier, formInputs[identifier]);
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
      if (
        findUser(
          users,
          formInputs.email,
          formInputs.password,
          userType,
          providerType,
        )
      ) {
        navigation.navigate(NAVIGATION.SCREEN_NAMES.HOME_SCREEN, {
          userInfo: users[formInputs.email],
        });
      } else {
        Alert.alert('Not Found', ERRORS.user_does_not_exist);
      }
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
              ? [styles.inputContainer, styles.redBorder]
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
            onBlur={() => fieldOnBlurHandler(FORM_FIELDS_IDENTIFIERS.email)}
            onChangeText={inputHandler.bind(
              this,
              FORM_FIELDS_IDENTIFIERS.email,
            )}
          />
        </View>
        {!!errors.email && <Error message={errors.email} />}

        {/* password input  */}
        <View
          style={
            !!errors.password
              ? [styles.inputContainer, styles.redBorder]
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
            onBlur={() => fieldOnBlurHandler(FORM_FIELDS_IDENTIFIERS.password)}
            onChangeText={inputHandler.bind(
              this,
              FORM_FIELDS_IDENTIFIERS.password,
            )}
          />

          <PressableIcon
            onPress={passwordVisibleHandler}
            source={
              showPassword
                ? FORM_ICONS.passwrord_eye_open
                : FORM_ICONS.passwrord_eye_closed
            }
            size={22}
          />
        </View>
        {!!errors.password && <Error message={errors.password} />}

        <FlatButton
          title={FLAT_BUTTON_TITLES.forgotPassword}
          style={styles.blackText}
          size={16}
        />

        <PrimaryButton
          title={PRIMARY_BUTTON_TITLES.login}
          color={COLORS.cardBlue}
          onPress={onSubmitHandler}
        />
        <View style={styles.signupContainer}>
          <Text style={styles.normalText}>{STATIC_TEXTS.no_account} </Text>
          <FlatButton
            title={FLAT_BUTTON_TITLES.signup}
            style={{color: COLORS.blue}}
            onPress={signupButtonHandler}
            size={16}
          />
        </View>
      </View>
      <View style={styles.servicesContainer}>
        <Text style={styles.grayText}>By tapping i agree to the </Text>
        <View style={styles.servicesContainerText}>
          <FlatButton
            title={FLAT_BUTTON_TITLES.services}
            style={styles.blackText}
          />
          <Text style={styles.grayText}> and </Text>
          <FlatButton
            title={FLAT_BUTTON_TITLES.policies}
            style={styles.blackText}
          />
        </View>
      </View>
    </View>
  );
};

export default LoginForm;
