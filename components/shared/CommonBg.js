import {View, StyleSheet, Image} from 'react-native';
import React from 'react';
import bg from '../../assets/Icons_Images/png/round.png';

const CommonBg = ({children}) => {
  return (
    <View style={styles.rootContainer}>
      <Image resizeMode="cover" source={bg} style={styles.backgoundImage} />
      <View style={styles.innerContainer}>{children}</View>
    </View>
  );
};
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    // justifyContent: 'flex-end',
    // backgroundColor: 'red',
    backgroundColor: 'white',
    // position: 'relative',
  },
  backgoundImage: {
    // flex: 1,
    // objectFit: 'cover',
    // borderWidth: 2,
    top: '-20%',
    right: '-50%',
    width: '150%',
    backgroundColor: 'white',
    borderColor: 'red',
  },
  innerContainer: {
    // backgroundColor: 'transparent',
    // backgroundColor: 'red',
    flex: 1,
    paddingHorizontal: 5,
    paddingVertical: 10,
    width: '100%',
    height: '90%',
    // marginHorizontal: 20,
    // justifyContent: 'center',
    // borderWidth: 3,
    bottom: 0,
    position: 'absolute',
  },
});
export default CommonBg;
