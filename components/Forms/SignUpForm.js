import React, {useState, useRef} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';

import Icon from './Icon';
import Avatar from '../ui/Avatar';
import FlatButton from '../ui/FlatButton';
import Input from './Input';

import RadioButton from './RadioButton';
import PressableIcon from './PressableIcon';
import PrimaryButton from '../ui/PrimaryButton';
import {colors} from '../../constants/GlobalStyles';
import CheckBox from './CheckBox';
import {FORM_ICONS} from '../../constants/assets';
import {
  isEmpty,
  validateMobile,
  validateName,
  validatePassword,
  validateAltMobile,
  validateEmail,
} from '../../util/Validators';

const defaultInputProps = {
  returnKeyType: 'next',
};

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formInputs, setFormInputs] = useState({});
  const [selectedGender, setSelectedGender] = useState('Male');
  const [errors, setErrors] = useState({});
  const [formDisabled, setFormDisabled] = useState(true);

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

  function passwordVisibleHandler() {
    setShowPassword(visible => !visible);
  }

  function inputHandler(identifier, value) {
    setFormInputs(prevInputs => ({...prevInputs, [identifier]: value}));
    validateInputs(identifier, value);
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
          [identifier]: isEmpty(value),
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
          [identifier]: validateAltMobile(value),
        }));
        break;

      default:
        break;
    }
  }

  return (
    <ScrollView style={{}}>
      <KeyboardAvoidingView>
        <Avatar />

        {/*firstname input*/}
        <View
          style={
            !!errors.firstname
              ? [styles.inputContainer, styles.invalid]
              : styles.inputContainer
          }>
          <Icon source={FORM_ICONS.firstname} />
          <Input
            config={{placeholder: 'First Name*', ...defaultInputProps}}
            value={formInputs?.firstname}
            name="firstname"
            ref={firstNameRef}
            nextElement={lastNameRef}
            onChangeText={inputHandler.bind(this, 'firstname')}
          />
        </View>
        {!!errors.firstname && (
          <Text style={{color: 'red'}}>{errors.firstname}</Text>
        )}

        {/*lastname input*/}
        <View
          style={
            !!errors.lastname
              ? [styles.inputContainer, styles.invalid]
              : styles.inputContainer
          }>
          <Icon source={FORM_ICONS.firstname} />
          <Input
            config={{placeholder: 'Last Name*', ...defaultInputProps}}
            value={formInputs?.lastname}
            ref={lastNameRef}
            nextElement={dobRef}
            onChangeText={inputHandler.bind(this, 'lastname')}
          />
        </View>
        {!!errors.lastname && (
          <Text style={{color: 'red'}}>{errors.lastname}</Text>
        )}

        {/*gender input*/}
        <View style={[styles.inputContainer, {borderColor: 'transparent'}]}>
          <Icon source={FORM_ICONS.gender} />
          <Input config={{placeholder: 'Gender*', editable: false}} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            gap: 5,
            justifyContent: 'flex-start',
            backgroundColor: 'white',
          }}>
          <RadioButton
            label={'Male'}
            checked={selectedGender === 'Male'}
            onPress={() => setSelectedGender('Male')}
          />
          <RadioButton
            label={'Female'}
            checked={selectedGender === 'Female'}
            onPress={() => setSelectedGender('Female')}
          />
          <RadioButton
            label={'Others'}
            checked={selectedGender === 'Others'}
            onPress={() => setSelectedGender('Others')}
          />
        </View>

        {/* {!!errors.gender && <Text style={{color: 'red'}}>{errors.gender}</Text>} */}

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
            config={{placeholder: 'Birthday*', ...defaultInputProps}}
            value={formInputs?.dateOfBirth}
            onChangeText={inputHandler.bind(this, 'dateOfBirth')}
          />
          <Icon source={FORM_ICONS.calendar} />
        </View>
        {!!errors.dateOfBirth && (
          <Text style={{color: 'red'}}>{errors.dateOfBirth}</Text>
        )}

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
            config={{placeholder: 'Address*', ...defaultInputProps}}
            value={formInputs?.address}
            onChangeText={inputHandler.bind(this, 'address')}
          />
        </View>
        {!!errors.address && (
          <Text style={{color: 'red'}}>{errors.address}</Text>
        )}

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
            config={{placeholder: 'City*', ...defaultInputProps}}
            value={formInputs?.city}
            onChangeText={inputHandler.bind(this, 'city')}
          />
        </View>
        {!!errors.city && <Text style={{color: 'red'}}>{errors.city}</Text>}

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
            config={{placeholder: 'State*', ...defaultInputProps}}
            value={formInputs?.state}
            onChangeText={inputHandler.bind(this, 'state')}
          />
        </View>
        {!!errors.state && <Text style={{color: 'red'}}>{errors.state}</Text>}

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
              placeholder: 'Postcode',
              keyboardType: 'number-pad',
              maxLength: 6,
              ...defaultInputProps,
            }}
            value={formInputs?.postcode}
            onChangeText={inputHandler.bind(this, 'postcode')}
          />
        </View>
        {!!errors.postcode && (
          <Text style={{color: 'red'}}>{errors.postcode}</Text>
        )}

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
            config={{placeholder: 'Country*', ...defaultInputProps}}
            value={formInputs.country}
            onChangeText={inputHandler.bind(this, 'country')}
          />
        </View>
        {!!errors.country && (
          <Text style={{color: 'red'}}>{errors.country}</Text>
        )}

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
              placeholder: 'Mobile*',
              keyboardType: 'number-pad',
              maxLength: 10,
              minLength: 10,
              ...defaultInputProps,
            }}
            value={formInputs?.mobile}
            onChangeText={inputHandler.bind(this, 'mobile')}
          />
        </View>
        {!!errors.mobile && <Text style={{color: 'red'}}>{errors.mobile}</Text>}

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
              placeholder: 'Alternate Mobile',
              keyboardType: 'number-pad',
              maxLength: 10,
              minLength: 10,
              ...defaultInputProps,
            }}
            value={formInputs?.altMobile}
            onChangeText={inputHandler.bind(this, 'altMobile')}
          />
        </View>
        {!!errors.altMobile && (
          <Text style={{color: 'red'}}>{errors.altMobile}</Text>
        )}

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
        {!!errors.email && <Text style={{color: 'red'}}>{errors.email}</Text>}

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
              placeholder: 'Password*',
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
        {!!errors.password && (
          <Text style={{color: 'red'}}>{errors.password}</Text>
        )}

        {/* services and policy*/}
        <View style={{alignItems: 'center', flexDirection: 'row', flex: 1}}>
          <CheckBox color={'red'} onPress={() => {}} />
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
          disabled={formDisabled}
          onPress={() => console.log(formInputs)}
        />
      </KeyboardAvoidingView>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  grayText: {color: '#ccc', fontSize: 12},
  invalid: {borderColor: 'red'},

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
  },
});

export default SignUpForm;
