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
    paddingVertical: 20,
    alignItems: 'center',
    gap: 10,
    backgroundColor: 'white',
  },
  backgoundImage: {
    flex: 1,
    objectFit: 'cover',
    // borderWidth: 4,
    right: '-50%',
    top: '-50%',
    // position: 'absolute',
  },
  innerContainer: {
    // flex: 1,
    width: '100%',
    position: 'absolute',
    padding: 15,
    // gap: 10,
    marginTop: 150,
  },
});
export default CommonBg;
