import React from 'react';
import {Text, View, StyleSheet, Image, Pressable} from 'react-native';
import sampleImage from '../../assets/Icons_Images/png/providers.png';

const ProviderTypeCard = ({source, title, color, text, onPress}) => {
  const mergedStyle = [styles.userCardContainer, {backgroundColor: color}];
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) =>
        pressed ? [...mergedStyle, styles.pressed] : mergedStyle
      }>
      <View style={styles.innerContainer}>
        <Text style={[styles.titleText, styles.whiteText]}>{title}</Text>
        <Image style={styles.iconImage} source={sampleImage} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  userCardContainer: {
    padding: 6,
    flex: 1,
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
  userTypeContainer: {},
  titleText: {fontSize: 16, fontWeight: 'bold'},
  whiteText: {
    color: 'white',
  },
});
export default ProviderTypeCard;
