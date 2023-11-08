import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
// import bg from '../assets/Icons_Images/png/round.png';
import bg from '../../assets/Icons_Images/png/round.png';

const CommonBg = ({children}) => {
  return (
    <View style={styles.rootContainer}>
      <Image source={bg} style={styles.backgoundImage} />
      <View style={styles.innerContainer}>{children}</View>
    </View>
  );
};
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 20,
    alignItems: 'center',
    gap: 10,
    backgroundColor: 'white',
  },
  backgoundImage: {
    flex: 1,
    objectFit: 'cover',
    width: '150%',
    borderWidth: 4,
    right: '-50%',
    top: '-50%',
  },
  innerContainer: {
    flex: 1,
    width: '100%',
    position: 'absolute',
    padding: 15,
    gap: 10,
    marginTop: 100,
  },
});
export default CommonBg;
