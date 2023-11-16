import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
// import mc from '../../assets/Icons_Images/png/medical-center.png';

const ListItem = ({source, title}) => {
  return (
    <View style={styles.listItemContainer}>
      <View style={styles.iconContainer}>
        <Image style={styles.iconImage} source={source} />
      </View>
      <View style={styles.listTextContainer}>
        <Text style={styles.listText}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listItemContainer: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    gap: 10,
  },
  iconImage: {height: 25, width: 25, objectFit: 'contain'},
  iconContainer: {margin: 2, padding: 4},
  listTextContainer: {},
  listText: {
    fontFamily: 'SFProDisplay-Regular',
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});
export default ListItem;
