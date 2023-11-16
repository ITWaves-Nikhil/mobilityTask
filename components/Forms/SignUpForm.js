import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

import Icon from './Icon';
import Error from './Error';
import Input from './Input';
import CheckBox from './CheckBox';
import RadioButton from './RadioButton';
import PressableIcon from './PressableIcon';
import ProviderSelectList from './ProviderSelectList';

import Avatar from '../ui/Avatar';
import PrimaryButton from '../ui/PrimaryButton';
import FlatButton from '../ui/FlatButton';

import {colors} from '../../constants/GlobalStyles';
import {FORM_ICONS} from '../../constants/assets';
import {PLACEHOLDERS} from '../../constants/Strings';
import {
  isEmpty,
  validateName,
  validateEmail,
  validatePassword,
  validateMobile,
  validatePostcode,
} from '../../util/Validators';

const defaultInputProps = {
  returnKeyType: 'next',
};

const SignUpForm = ({userType, providerType}) => {
  // console.log('signup form', userType, '=>', providerType);

  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const [formInputs, setFormInputs] = useState({
    firstname: '',
    lastname: '',
    gender: 'Male',
    dateOfBirth: '',
    address: '',
    city: '',
    state: '',
    postcode: '',
    country: '',
    mobile: '',
    altMobile: '',
    email: '',
    password: '',
  });
  const [selectedGender, setSelectedGender] = useState('Male');
  const [errors, setErrors] = useState({});
  const [signUpDisabled, setSignUpDisabled] = useState(true);
  const [termsAgreed, setTermsAgreed] = useState(false);

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const dobRef = useRef();
  const addressRef = useRef();
  const cityRef = useRef();
  const stateRef = useRef();
  const postcodeRef = useRef();
  const countryRef = useRef();
  const mobileRef = useRef();
  const altMobileRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  useEffect(() => {
    setFormInputs(prevInputs => ({...prevInputs, ['userType']: userType}));
    if (providerType !== '') {
      setFormInputs(prevInputs => ({
        ...prevInputs,
        ['providerType']: providerType,
      }));
    }
  }, [userType, providerType]);

  function passwordVisibleHandler() {
    setShowPassword(visible => !visible);
  }

  function inputHandler(identifier, value) {
    setFormInputs(prevInputs => ({...prevInputs, [identifier]: value}));
    validateInputs(identifier, value);
  }
  function selectHandler(identifier, data) {
    setFormInputs(prevInputs => ({...prevInputs, [identifier]: data.value}));
  }

  function genderRadioHandler(value) {
    setFormInputs(prevInputs => ({...prevInputs, ['gender']: value}));
    setSelectedGender(`${value}`);
  }

  function validateInputs(identifier, value) {
    switch (identifier) {
      case 'firstname':
        setErrors(prevErrors => ({
          ...prevErrors,
          [identifier]: validateName(value),
        }));
        break;

      case 'lastname':
        setErrors(prevErrors => ({
          ...prevErrors,
          [identifier]: validateName(value),
        }));
        break;
      case 'dateOfBirth':
        setErrors(prevErrors => ({
          ...prevErrors,
          [identifier]: isEmpty(value),
        }));
        break;

      case 'address':
        setErrors(prevErrors => ({
          ...prevErrors,
          [identifier]: isEmpty(value),
        }));
        break;

      case 'city':
        setErrors(prevErrors => ({
          ...prevErrors,
          [identifier]: isEmpty(value),
        }));
        break;

      case 'state':
        setErrors(prevErrors => ({
          ...prevErrors,
          [identifier]: isEmpty(value),
        }));
        break;

      case 'postcode':
        setErrors(prevErrors => ({
          ...prevErrors,
          [identifier]: validatePostcode(value),
        }));
        break;

      case 'country':
        setErrors(prevErrors => ({
          ...prevErrors,
          [identifier]: isEmpty(value),
        }));
        break;

      case 'email':
        setErrors(prevErrors => ({
          ...prevErrors,
          [identifier]: validateEmail(value),
        }));
        break;

      case 'password':
        setErrors(prevErrors => ({
          ...prevErrors,
          [identifier]: validatePassword(value),
        }));
        break;

      case 'mobile':
        setErrors(prevErrors => ({
          ...prevErrors,
          [identifier]: validateMobile(value),
        }));
        break;

      case 'altMobile':
        setErrors(prevErrors => ({
          ...prevErrors,
          [identifier]: validateMobile(value),
        }));
        break;

      default:
        break;
    }
  }

  function onSubmitHandler() {
    setErrors(prevErrors => ({
      ...prevErrors,
      firstname: validateName(formInputs.firstname),
      lastname: validateName(formInputs.lastname),
      dateOfBirth: isEmpty(formInputs.dateOfBirth),
      address: isEmpty(formInputs.address),
      city: isEmpty(formInputs.city),
      state: isEmpty(formInputs.state),
      postcode: validatePostcode(formInputs.postcode),
      country: isEmpty(formInputs.country),
      mobile: validateMobile(formInputs.mobile),
      altMobile: validateMobile(formInputs.altMobile),
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
      navigation.navigate('Home', {userInfo: formInputs});
    }
  }

  function termsAgreedHandler() {
    setTermsAgreed(true);
    setSignUpDisabled(prevState => !prevState);
  }

  return (
    <ScrollView>
      <KeyboardAvoidingView>
        <Avatar />
        {userType === 'provider' ? (
          <ProviderSelectList
            providerType={providerType}
            onSelectItem={selectHandler.bind(this, 'providerType')}
          />
        ) : (
          ''
        )}
        {userType === 'provider' ? (
          <View style={styles.inputContainer}>
            <Icon source={FORM_ICONS.firstname} />
            <Input
              config={{
                placeholder: PLACEHOLDERS.companyName,
                ...defaultInputProps,
              }}
              value={''}
              // nextElement={firstNameRef}
              onChangeText={inputHandler.bind(this, 'companyName')}
            />
          </View>
        ) : (
          ''
        )}
        {/*firstname input*/}
        <View
          style={
            !!errors.firstname
              ? [styles.inputContainer, styles.invalid]
              : styles.inputContainer
          }>
          <Icon source={FORM_ICONS.firstname} />
          <Input
            config={{placeholder: PLACEHOLDERS.firstname, ...defaultInputProps}}
            value={formInputs?.firstname}
            name="firstname"
            ref={firstNameRef}
            nextElement={lastNameRef}
            onChangeText={inputHandler.bind(this, 'firstname')}
          />
        </View>
        {!!errors.firstname && <Error message={errors.firstname} />}

        {/*lastname input*/}
        <View
          style={
            !!errors.lastname
              ? [styles.inputContainer, styles.invalid]
              : styles.inputContainer
          }>
          <Icon source={FORM_ICONS.firstname} />
          <Input
            config={{placeholder: PLACEHOLDERS.lastname, ...defaultInputProps}}
            value={formInputs?.lastname}
            ref={lastNameRef}
            nextElement={dobRef}
            onChangeText={inputHandler.bind(this, 'lastname')}
          />
        </View>
        {!!errors.lastname && <Error message={errors.lastname} />}

        {/*gender input*/}
        <View style={[styles.inputContainer, {borderColor: 'transparent'}]}>
          <Icon source={FORM_ICONS.gender} />
          <Input config={{placeholder: PLACEHOLDERS.gender, editable: false}} />
        </View>
        <View style={styles.radioButtonContainer}>
          <RadioButton
            label={'Male'}
            checked={selectedGender === 'Male'}
            onPress={() => genderRadioHandler('Male')}
          />
          <RadioButton
            label={'Female'}
            checked={selectedGender === 'Female'}
            onPress={() => genderRadioHandler('Female')}
          />
          <RadioButton
            label={'Others'}
            checked={selectedGender === 'Others'}
            onPress={() => genderRadioHandler('Others')}
          />
        </View>

        {/*dateofbirth input*/}
        <View
          style={
            !!errors.dateOfBirth
              ? [styles.inputContainer, styles.invalid]
              : styles.inputContainer
          }>
          <Icon source={FORM_ICONS.birthday} />
          <Input
            ref={dobRef}
            nextElement={addressRef}
            config={{
              keyboardType: 'number-pad',
              placeholder: PLACEHOLDERS.dateOfBirth,
              ...defaultInputProps,
            }}
            value={formInputs?.dateOfBirth}
            onChangeText={inputHandler.bind(this, 'dateOfBirth')}
          />
          <Icon source={FORM_ICONS.calendar} />
        </View>
        {!!errors.dateOfBirth && <Error message={errors.dateOfBirth} />}

        {/*address input*/}
        <View
          style={
            !!errors.address
              ? [styles.inputContainer, styles.invalid]
              : styles.inputContainer
          }>
          <Icon source={FORM_ICONS.address} />
          <Input
            ref={addressRef}
            nextElement={cityRef}
            config={{placeholder: PLACEHOLDERS.address, ...defaultInputProps}}
            value={formInputs?.address}
            onChangeText={inputHandler.bind(this, 'address')}
          />
        </View>
        {!!errors.address && <Error message={errors.address} />}

        {/*city input*/}
        <View
          style={
            !!errors.city
              ? [styles.inputContainer, styles.invalid]
              : styles.inputContainer
          }>
          <Icon source={FORM_ICONS.address} />
          <Input
            ref={cityRef}
            nextElement={stateRef}
            config={{placeholder: PLACEHOLDERS.city, ...defaultInputProps}}
            value={formInputs?.city}
            onChangeText={inputHandler.bind(this, 'city')}
          />
        </View>
        {!!errors.city && <Error message={errors.city} />}

        {/*state input*/}
        <View
          style={
            !!errors.state
              ? [styles.inputContainer, styles.invalid]
              : styles.inputContainer
          }>
          <Icon source={FORM_ICONS.address} />
          <Input
            ref={stateRef}
            nextElement={postcodeRef}
            config={{placeholder: PLACEHOLDERS.state, ...defaultInputProps}}
            value={formInputs?.state}
            onChangeText={inputHandler.bind(this, 'state')}
          />
        </View>
        {!!errors.state && <Error message={errors.state} />}

        {/*postcode input*/}
        <View
          style={
            !!errors.postcode
              ? [styles.inputContainer, styles.invalid]
              : styles.inputContainer
          }>
          <Icon source={FORM_ICONS.address} />
          <Input
            ref={postcodeRef}
            nextElement={countryRef}
            config={{
              placeholder: PLACEHOLDERS.postcode,
              keyboardType: 'number-pad',
              maxLength: 6,
              ...defaultInputProps,
            }}
            value={formInputs?.postcode}
            onChangeText={inputHandler.bind(this, 'postcode')}
          />
        </View>
        {!!errors.postcode && <Error message={errors.postcode} />}

        {/* country input*/}
        <View
          style={
            !!errors.country
              ? [styles.inputContainer, styles.invalid]
              : styles.inputContainer
          }>
          <Icon source={FORM_ICONS.address} />
          <Input
            ref={countryRef}
            nextElement={mobileRef}
            config={{placeholder: PLACEHOLDERS.country, ...defaultInputProps}}
            value={formInputs.country}
            onChangeText={inputHandler.bind(this, 'country')}
          />
        </View>
        {!!errors.country && <Error message={errors.country} />}

        {/*  mobile input*/}
        <View
          style={
            !!errors.mobile
              ? [styles.inputContainer, styles.invalid]
              : styles.inputContainer
          }>
          <Icon source={FORM_ICONS.mobile} />
          <Input
            ref={mobileRef}
            nextElement={altMobileRef}
            config={{
              placeholder: PLACEHOLDERS.mobile,
              keyboardType: 'number-pad',
              maxLength: 10,
              minLength: 10,
              ...defaultInputProps,
            }}
            value={formInputs?.mobile}
            onChangeText={inputHandler.bind(this, 'mobile')}
          />
        </View>
        {!!errors.mobile && <Error message={errors.mobile} />}

        {/* alternate mobile input*/}
        <View
          style={
            !!errors.altMobile
              ? [styles.inputContainer, styles.invalid]
              : styles.inputContainer
          }>
          <Icon source={FORM_ICONS.mobile} />
          <Input
            ref={altMobileRef}
            nextElement={emailRef}
            config={{
              placeholder: PLACEHOLDERS.altMobile,
              keyboardType: 'number-pad',
              maxLength: 10,
              minLength: 10,
              ...defaultInputProps,
            }}
            value={formInputs?.altMobile}
            onChangeText={inputHandler.bind(this, 'altMobile')}
          />
        </View>
        {!!errors.altMobile && <Error message={errors.altMobile} />}

        {/* email input  */}
        <View
          style={
            !!errors.email
              ? [styles.inputContainer, styles.invalid]
              : styles.inputContainer
          }>
          <Icon source={FORM_ICONS.email} />
          <Input
            ref={emailRef}
            nextElement={passwordRef}
            config={{placeholder: 'Email*', ...defaultInputProps}}
            value={formInputs?.email}
            onChangeText={inputHandler.bind(this, 'email')}
          />
        </View>
        {!!errors.email && <Error message={errors.email} />}

        {/* password input */}
        <View
          style={
            !!errors.password
              ? [styles.inputContainer, styles.invalid]
              : styles.inputContainer
          }>
          <Icon source={FORM_ICONS.passwrord_lock} />
          <Input
            ref={passwordRef}
            config={{
              placeholder: PLACEHOLDERS.password,
              secureTextEntry: showPassword ? false : true,
              ...defaultInputProps,
            }}
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

        {/* services and policy*/}
        <View style={styles.termsContainer}>
          <CheckBox onPress={termsAgreedHandler} />
          <Text style={styles.grayText}>By tapping i agree to the </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <FlatButton title={'Service Terms'} style={{color: 'black'}} />
            <Text style={styles.grayText}> and </Text>
            <FlatButton title={'Privacy Policy'} style={{color: 'black'}} />
          </View>
        </View>

        {/*signup button*/}
        <PrimaryButton
          title={'Sign Up'}
          color={colors.cardBlue}
          disabled={signUpDisabled}
          onPress={onSubmitHandler}
        />
      </KeyboardAvoidingView>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  radioButtonContainer: {
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'flex-start',
    backgroundColor: 'white',
  },
  termsContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
    marginVertical: 6,
  },
  grayText: {color: '#ccc', fontSize: 12},
  invalid: {borderColor: 'red'},
});

export default SignUpForm;
