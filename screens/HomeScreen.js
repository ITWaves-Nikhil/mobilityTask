import {View, Text, StatusBar} from 'react-native';
import React from 'react';

const HomeScreen = ({route}) => {
  const userData = route.params;
  console.log(userData);
  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor={'white'}
        barStyle={'dark-content'}
      />
    </>
  );
};

export default HomeScreen;
