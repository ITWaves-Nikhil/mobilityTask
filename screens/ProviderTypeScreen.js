import {View, Image, Text, StyleSheet} from 'react-native';
import React from 'react';
import ProviderTypeCard from '../components/UI/ProviderTypeCard';
import CommonBg from '../components/shared/CommonBg';

const ProviderTypeScreen = ({route, navigation}) => {
  return (
    <CommonBg>
      <View style={styles.userMenuContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Choose Provider Type</Text>
        </View>
        <View style={styles.cardsContainer}>
          <ProviderTypeCard
            title={'Providers'}
            color={'blue'}
            text={'abc'}
            source={'providers.png'}
          />
        </View>
      </View>
    </CommonBg>
  );
};

const styles = StyleSheet.create({
  userMenuContainer: {gap: 10},
  headerContainer: {padding: 8},
  headerText: {color: 'black', fontSize: 20, fontWeight: 'bold'},
  cardsContainer: {gap: 10},
});
export default ProviderTypeScreen;
