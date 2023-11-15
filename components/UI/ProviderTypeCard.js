import React from 'react';
import {Text, View, StyleSheet, Image, Pressable} from 'react-native';
// import sampleImage from '../../assets/Icons_Images/png/providers.png';

const ProviderTypeCard = ({source, title, color, text, onPress}) => {
  const mergedStyle = [styles.userCardContainer, {backgroundColor: color}];
  // const imagePath = `../../assets/Icons_Images/png/${source}`;
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) =>
        pressed ? [...mergedStyle, styles.pressed] : mergedStyle
      }>
      <View style={styles.innerContainer}>
        <View style={styles.userTypeContainer}>
          <Text style={[styles.titleText, styles.whiteText]}>{title}</Text>
          <Text style={styles.whiteText}>{text}</Text>
        </View>
        <View>
          <Image style={styles.iconImage} source={source} />
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  userCardContainer: {
    padding: 6,
    height: 100,
    gap: 10,
    overflow: 'hidden',
    elevation: 5,
    shadowOffset: {height: 0, width: 0},
    shadowColor: '#000',
    shadowOpacity: 0.7,
  },
  pressed: {opacity: 0.8},
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    borderWidth: 1,
    padding: 10,
    borderColor: 'white',
    borderStyle: 'dotted',
  },
  iconImage: {height: 80, width: 80},
  userTypeContainer: {flex: 1},
  titleText: {fontSize: 16, fontWeight: 'bold'},
  whiteText: {
    color: 'white',
  },
});
export default ProviderTypeCard;
