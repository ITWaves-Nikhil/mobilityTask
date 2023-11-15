import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import React from 'react';
import bg from '../../assets/Icons_Images/png/round.png';

const CommonBg = ({children}) => {
  // const {height, width} = Dimensions.get('screen');
  // console.log(height, width);
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
    // paddingVertical: 20,
    alignItems: 'center',
    gap: 10,
    // backgroundColor: 'red',
    backgroundColor: 'white',
    // position: 'relative',
  },
  backgoundImage: {
    // flex: 1,
    objectFit: 'cover',
    // borderWidth: 2,
    top: '-20%',
    right: '-70%',
    width: '150%',
    position: 'absolute',
    borderColor: 'red',
  },
  innerContainer: {
    flex: 1,
    width: '100%',
    marginTop: 100,
  },
});
export default CommonBg;
