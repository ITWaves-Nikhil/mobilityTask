import React from 'react';
import {Text, View, StyleSheet, Image, Pressable} from 'react-native';

const UserTypeCard = ({source, title, color, text, onPress}) => {
  const mergedStyle = [styles.userCardContainer, {backgroundColor: color}];

  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) =>
        pressed ? [...mergedStyle, styles.pressed] : mergedStyle
      }>
      <View style={styles.iconContainer}>
        <Image style={styles.iconImage} source={source} />
      </View>
      <View style={styles.userTypeContainer}>
        <Text style={[styles.titleText, styles.whiteText]}>{title}</Text>
        <Text style={styles.whiteText}>{text}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  userCardContainer: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    padding: 8,
    gap: 10,
    overflow: 'hidden',
    elevation: 5,
    shadowOffset: {height: 0, width: 0},
    shadowColor: '#000',
    shadowOpacity: 0.7,
  },
  pressed: {opacity: 0.8},
  iconImage: {height: 80, width: 80},
  iconContainer: {marginHorizontal: 2},
  userTypeContainer: {flex: 1, gap: 5},
  titleText: {fontSize: 16, fontWeight: 'bold'},
  whiteText: {color: 'white'},
});
export default UserTypeCard;
