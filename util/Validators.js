import {regex} from '../constants/Regex';
import {ERRORS} from '../constants/Strings';

export function isEmpty(value) {
  if (value === '') return ERRORS.required;
}

export function validateName(value) {
  if (isEmpty(value)) {
    return ERRORS.required;
  } else if (!regex.name.test(value)) {
    return ERRORS.name_invalid;
  } else {
    return '';
  }
}
export function validateEmail(value) {
  if (isEmpty(value)) {
    return ERRORS.required;
  } else if (!regex.email.test(value)) {
    return ERRORS.email_invalid;
  } else {
    return '';
  }
}

export function validatePassword(value) {
  if (isEmpty(value)) {
    return ERRORS.required;
  } else if (value.length < 8) {
    return ERRORS.password_invalid;
  } else {
    return '';
  }
}
export function validateMobile(number) {
  if (isEmpty(number)) {
    return ERRORS.required;
  } else if (number.length !== 10) {
    return ERRORS.mobile_length;
  } else {
    return '';
  }
}
export function validatePostcode(number) {
  if (isEmpty(number)) {
    return ERRORS.required;
  } else if (number.length !== 6) {
    return ERRORS.postcode_length;
  } else {
    return '';
  }
}
