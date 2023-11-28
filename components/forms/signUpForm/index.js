import React, { useState, useRef, useEffect } from 'react';
import { Text, View, ScrollView, KeyboardAvoidingView, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import Icon from '../icon/index';
import Error from '../error/index';
import Input from '../input/index';
import CheckBox from '../checkBox/index';
import RadioButton from '../radioButton/index';
import PressableIcon from '../pressableIcon/index';
import ProviderSelectList from '../providerSelectList/index';
import { styles } from './styles';
import { NAVIGATION } from '../../../constants/navigation';

import Avatar from '../../ui/avatar/index';
import PrimaryButton from '../../ui/primaryButton/index';
import FlatButton from '../../ui/flatButton/index';
import { FORM_FIELDS_IDENTIFIERS, GENDER_VALUES } from '../../../constants/enums';
import { formatDate } from '../../../util/Helpers';
import { UserTypes } from '../../../constants/strings';

import { COLORS } from '../../../constants/theme';
import { FORM_ICONS } from '../../../constants/assets';
import {
  PLACEHOLDERS,
  FLAT_BUTTON_TITLES,
  PRIMARY_BUTTON_TITLES,
} from '../../../constants/strings';
import {
  isEmpty,
  validateName,
  validateEmail,
  validatePassword,
  validateMobile,
  validatePostcode,
  validateAltMobile,
} from '../../../util/Validators';
import { addUser } from '../../../redux/userSlice';
import ImagePickerModal from '../imagePickerModal';

const defaultInputProps = {
  returnKeyType: 'next',
};

const SignUpForm = ({ userType, providerType }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const [blurredFields, setBlurredFields] = useState({});
  const [formInputs, setFormInputs] = useState({
    firstname: '',
    lastname: '',
    gender: GENDER_VALUES.male,
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
    userImage: ''
  });
  const [selectedGender, setSelectedGender] = useState(GENDER_VALUES.male);
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

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    setFormInputs(prevInputs => ({
      ...prevInputs,
      [FORM_FIELDS_IDENTIFIERS.dateOfBirth]: formatDate(date),
    }));
    hideDatePicker();
  };

  useEffect(() => {
    setFormInputs(prevInputs => ({ ...prevInputs, ['userType']: userType }));
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
    setFormInputs(prevInputs => ({ ...prevInputs, [identifier]: value }));
    if (blurredFields[identifier]) {
      validateInputs(identifier, value);
    }
  }
  function selectHandler(identifier, data) {
    setFormInputs(prevInputs => ({ ...prevInputs, [identifier]: data.value }));
  }

  function genderRadioHandler(value) {
    setFormInputs(prevInputs => ({
      ...prevInputs,
      [FORM_FIELDS_IDENTIFIERS.gender]: value,
    }));
    setSelectedGender(`${value}`);
  }

  function validateInputs(identifier, value) {
    switch (identifier) {
      case FORM_FIELDS_IDENTIFIERS.firstname:
        setErrors(prevErrors => ({
          ...prevErrors,
          [identifier]: validateName(value),
        }));
        break;

      case FORM_FIELDS_IDENTIFIERS.lastname:
        setErrors(prevErrors => ({
          ...prevErrors,
          [identifier]: validateName(value),
        }));
        break;
      case FORM_FIELDS_IDENTIFIERS.dateOfBirth:
        setErrors(prevErrors => ({
          ...prevErrors,
          [identifier]: isEmpty(value),
        }));
        break;

      case FORM_FIELDS_IDENTIFIERS.address:
        setErrors(prevErrors => ({
          ...prevErrors,
          [identifier]: isEmpty(value),
        }));
        break;

      case FORM_FIELDS_IDENTIFIERS.city:
        setErrors(prevErrors => ({
          ...prevErrors,
          [identifier]: isEmpty(value),
        }));
        break;

      case FORM_FIELDS_IDENTIFIERS.state:
        setErrors(prevErrors => ({
          ...prevErrors,
          [identifier]: isEmpty(value),
        }));
        break;

      case FORM_FIELDS_IDENTIFIERS.postcode:
        setErrors(prevErrors => ({
          ...prevErrors,
          [identifier]: validatePostcode(value),
        }));
        break;

      case FORM_FIELDS_IDENTIFIERS.country:
        setErrors(prevErrors => ({
          ...prevErrors,
          [identifier]: isEmpty(value),
        }));
        break;

      case FORM_FIELDS_IDENTIFIERS.email:
        setErrors(prevErrors => ({
          ...prevErrors,
          [identifier]: validateEmail(value),
        }));
        break;

      case FORM_FIELDS_IDENTIFIERS.password:
        setErrors(prevErrors => ({
          ...prevErrors,
          [identifier]: validatePassword(value),
        }));
        break;

      case FORM_FIELDS_IDENTIFIERS.mobile:
        setErrors(prevErrors => ({
          ...prevErrors,
          [identifier]: validateMobile(value),
        }));
        break;

      case FORM_FIELDS_IDENTIFIERS.altMobile:
        setErrors(prevErrors => ({
          ...prevErrors,
          [identifier]: validateAltMobile(value),
        }));
        break;

      default:
        break;
    }
  }

  function fieldOnBlurHandler(identifier) {
    setBlurredFields(fields => ({ ...fields, [identifier]: true }));
    validateInputs(identifier, formInputs[identifier]);
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
      altMobile: validateAltMobile(formInputs.altMobile),
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
      dispatch(addUser(formInputs));
      navigation.navigate(NAVIGATION.SCREEN_NAMES.WELCOME_SCREEN);
    }
  }

  function termsAgreedHandler() {
    setTermsAgreed(true);
    setSignUpDisabled(prevState => !prevState);
  }
  function setAvatarImage(uri) {
    setFormInputs(prevInputs => ({ ...prevInputs, userImage: uri }))
  }

  return (
    <>
      <ScrollView>
        <KeyboardAvoidingView>
          <View style={styles.avatarPickerContainer}>
            <Avatar source={formInputs?.userImage} />
            <View style={styles.cameraButtonContainer}>
              <PressableIcon source={FORM_ICONS.camera} size={24} onPress={toggleModal} />
            </View>
          </View>
          {userType === UserTypes.provider.title ? (
            <View style={styles.selectMenuContainer}>
              <Icon source={FORM_ICONS.firstname} />
              <ProviderSelectList
                providerType={providerType}
                onSelectItem={selectHandler.bind(this, 'providerType')}
              />
            </View>
          ) : (
            ''
          )}
          {userType === UserTypes.provider.title ? (
            <View style={styles.inputContainer}>
              <Icon source={FORM_ICONS.company_name} />
              <Input
                config={{
                  placeholder: PLACEHOLDERS.companyName,
                  ...defaultInputProps,
                }}
                value={''}
                nextElement={firstNameRef}
                onBlur={() =>
                  fieldOnBlurHandler(FORM_FIELDS_IDENTIFIERS.companyName)
                }
                onChangeText={inputHandler.bind(
                  this,
                  FORM_FIELDS_IDENTIFIERS.companyName,
                )}
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
              config={{ placeholder: PLACEHOLDERS.firstname, ...defaultInputProps }}
              value={formInputs?.firstname}
              ref={firstNameRef}
              nextElement={lastNameRef}
              onBlur={() => fieldOnBlurHandler(FORM_FIELDS_IDENTIFIERS.firstname)}
              onChangeText={inputHandler.bind(
                this,
                FORM_FIELDS_IDENTIFIERS.firstname,
              )}
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
              config={{ placeholder: PLACEHOLDERS.lastname, ...defaultInputProps }}
              value={formInputs?.lastname}
              ref={lastNameRef}
              nextElement={dobRef}
              onBlur={() => fieldOnBlurHandler(FORM_FIELDS_IDENTIFIERS.lastname)}
              onChangeText={inputHandler.bind(
                this,
                FORM_FIELDS_IDENTIFIERS.lastname,
              )}
            />
          </View>
          {!!errors.lastname && <Error message={errors.lastname} />}

          {/*gender input*/}
          <View style={[styles.inputContainer, styles.transparentBorder]}>
            <Icon source={FORM_ICONS.gender} />
            <Input config={{ placeholder: PLACEHOLDERS.gender, editable: false }} />
          </View>
          <View style={styles.radioButtonContainer}>
            <RadioButton
              label={GENDER_VALUES.male}
              checked={selectedGender === GENDER_VALUES.male}
              onPress={() => genderRadioHandler(GENDER_VALUES.male)}
            />
            <RadioButton
              label={GENDER_VALUES.female}
              checked={selectedGender === GENDER_VALUES.female}
              onPress={() => genderRadioHandler(GENDER_VALUES.female)}
            />
            <RadioButton
              label={GENDER_VALUES.others}
              checked={selectedGender === GENDER_VALUES.others}
              onPress={() => genderRadioHandler(GENDER_VALUES.others)}
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
                editable: false,
                value: formInputs?.dateOfBirth,
                ...defaultInputProps,
              }}
              onBlur={() =>
                fieldOnBlurHandler(FORM_FIELDS_IDENTIFIERS.dateOfBirth)
              }
              onChangeText={inputHandler.bind(
                this,
                FORM_FIELDS_IDENTIFIERS.dateOfBirth,
              )}
            />
            <PressableIcon
              source={FORM_ICONS.calendar}
              onPress={showDatePicker}
              size={22}
            />
          </View>
          {!!errors.dateOfBirth && <Error message={errors.dateOfBirth} />}
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
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
              config={{
                placeholder: PLACEHOLDERS.address,
                value: formInputs?.address,
                ...defaultInputProps,
              }}
              onBlur={() => fieldOnBlurHandler(FORM_FIELDS_IDENTIFIERS.address)}
              onChangeText={inputHandler.bind(
                this,
                FORM_FIELDS_IDENTIFIERS.address,
              )}
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
              config={{ placeholder: PLACEHOLDERS.city, ...defaultInputProps }}
              value={formInputs?.city}
              onBlur={() => fieldOnBlurHandler(FORM_FIELDS_IDENTIFIERS.city)}
              onChangeText={inputHandler.bind(this, FORM_FIELDS_IDENTIFIERS.city)}
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
              config={{ placeholder: PLACEHOLDERS.state, ...defaultInputProps }}
              value={formInputs?.state}
              onBlur={() => fieldOnBlurHandler(FORM_FIELDS_IDENTIFIERS.state)}
              onChangeText={inputHandler.bind(
                this,
                FORM_FIELDS_IDENTIFIERS.state,
              )}
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
              onBlur={() => fieldOnBlurHandler(FORM_FIELDS_IDENTIFIERS.postcode)}
              onChangeText={inputHandler.bind(
                this,
                FORM_FIELDS_IDENTIFIERS.postcode,
              )}
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
              config={{ placeholder: PLACEHOLDERS.country, ...defaultInputProps }}
              value={formInputs.country}
              onBlur={() => fieldOnBlurHandler(FORM_FIELDS_IDENTIFIERS.country)}
              onChangeText={inputHandler.bind(
                this,
                FORM_FIELDS_IDENTIFIERS.country,
              )}
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
              onBlur={() => fieldOnBlurHandler(FORM_FIELDS_IDENTIFIERS.mobile)}
              onChangeText={inputHandler.bind(
                this,
                FORM_FIELDS_IDENTIFIERS.mobile,
              )}
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
              onBlur={() => fieldOnBlurHandler(FORM_FIELDS_IDENTIFIERS.altMobile)}
              onChangeText={inputHandler.bind(
                this,
                FORM_FIELDS_IDENTIFIERS.altMobile,
              )}
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
              config={{ placeholder: PLACEHOLDERS.email, ...defaultInputProps }}
              value={formInputs?.email}
              onBlur={() => fieldOnBlurHandler(FORM_FIELDS_IDENTIFIERS.email)}
              onChangeText={inputHandler.bind(
                this,
                FORM_FIELDS_IDENTIFIERS.email,
              )}
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

          {/* services and policy*/}
          <View style={styles.termsContainer}>
            <CheckBox onPress={termsAgreedHandler} color={COLORS.green} />
            <Text style={styles.grayText}>By tapping i agree to the </Text>
            <View style={styles.termsTextContainer}>
              <FlatButton
                title={FLAT_BUTTON_TITLES.services}
                style={styles.blackText}
                size={14}
              />
              <Text style={styles.grayText}> and </Text>
              <FlatButton
                title={FLAT_BUTTON_TITLES.policies}
                style={styles.blackText}
                size={14}
              />
            </View>
          </View>

          {/*signup button*/}
          <PrimaryButton
            title={PRIMARY_BUTTON_TITLES.signup}
            color={COLORS.cardBlue}
            disabled={signUpDisabled}
            onPress={onSubmitHandler}
          />
        </KeyboardAvoidingView>
      </ScrollView>
      <ImagePickerModal isModalVisible={isModalVisible} setModalVisible={setModalVisible} setAvatarImage={setAvatarImage} />
    </>
  );
};

export default SignUpForm;
