import {View, Image, StyleSheet} from 'react-native';
import React from 'react';
import avatarImage from '../../assets/Icons_Images/png/patient_added3x.png';
const Avatar = ({source}) => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.avatarImageContainer}>
        <Image
          style={styles.avatarImage}
          source={!!source ? source : avatarImage}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  rootContainer: {
    alignSelf: 'center',
    height: 120,
    width: 120,
    padding: 10,
    borderWidth: 2,
    borderColor: 'red',
    overflow: 'hidden',
    backgroundColor: '#ccc',
    borderRadius: 100,
  },
  avatarImageContainer: {alignItems: 'center', margin: 4},
  avatarImage: {height: 100, width: 100, margin: 4},
});
export default Avatar;
