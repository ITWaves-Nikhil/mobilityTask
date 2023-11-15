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
    overflow: 'hidden',
    backgroundColor: '#ccc',
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#ccc',
  },
  avatarImageContainer: {
    alignItems: 'center',
    overflow: 'hidden',
  },
  avatarImage: {height: 120, width: 120},
});
export default Avatar;
