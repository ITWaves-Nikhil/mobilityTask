import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import mc from '../../assets/Icons_Images/png/medical-center.png';

const ListItem = ({source, title}) => {
  return (
    <View style={styles.listItemContainer}>
      <View style={styles.iconContainer}>
        <Image style={styles.iconImage} source={mc} />
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
  },
  iconImage: {height: 50, width: 50},
  iconContainer: {marginHorizontal: 2},
  listTextContainer: {},
  listText: {fontSize: 16, fontWeight: 'bold'},
});
export default ListItem;
