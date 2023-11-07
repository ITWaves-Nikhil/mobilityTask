import {View, Text} from 'react-native';
import React from 'react';

const WelcomeScreen = ({route, navigation}) => {
  return (
    <View style={styles.rootContainer}>
      <View st></View>
      <View style={styles.optionsContainer}></View>
      <View style={styles.summaryContainer}>
        <Text>
          Care with Personal Touch and Integrity Provide the most appropriate
          and value based care all the time. We are just an appointment away For
          your world class care!
        </Text>
      </View>
      <View style={styles.buttonsContainer}></View>
    </View>
  );
};
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  optionsContainer: {},
  summaryContainer: {},
  buttonsContainer: {},
});
export default WelcomeScreen;
