import {regex} from '../constants/Regex';

export function isEmpty(value) {
  if (value === '') return 'Required*';
}

export function validateName(value) {
  if (isEmpty(value)) {
    return 'Required*';
  } else if (!regex.name.test(value)) {
    return 'Alphabets Only';
  } else {
    return '';
  }
}
export function validateEmail(value) {
  if (isEmpty(value)) {
    return 'Required*';
  } else if (!regex.email.test(value)) {
    return 'Must be a valid email address';
  } else {
    return '';
  }
}

export function validatePassword(value) {
  if (isEmpty(value)) {
    return 'Required*';
  } else if (value.length < 8) {
    return 'Must be atleast 8 characters';
  } else {
    return '';
  }
}
export function validateMobile(number) {
  if (isEmpty(number)) {
    return 'Required*';
  } else if (number.length !== 10) {
    return 'Must be exactly 10 characters';
  } else {
    return '';
  }
}
export function validateAltMobile(number) {
  number.length !== 10 ? 'Must be exactly 10 characters' : '';
}
