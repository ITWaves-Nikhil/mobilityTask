import {View, Text, StyleSheet, StatusBar} from 'react-native';
import React from 'react';
import CommonBg from '../components/shared/CommonBg';
import LoginForm from '../components/forms/LoginForm';
import SignUpForm from '../components/forms/SignUpForm';
import {useLayoutEffect} from 'react';

const Form = ({route, navigation}) => {
  useLayoutEffect(() => {
    route.params.formType === 'login'
      ? navigation.setOptions({title: 'Login'})
      : navigation.setOptions({title: ' Sign Up'});
  });

  const FormType = route.params.formType;

  console.log(route.params.formType, '=>', route.params?.userType);

  return (
    <CommonBg>
      <StatusBar
        animated={true}
        backgroundColor={'white'}
        barStyle={'dark-content'}
      />
      {FormType === 'login' ? <LoginForm /> : <SignUpForm />}
    </CommonBg>
  );
};
const styles = StyleSheet.create();
export default Form;
