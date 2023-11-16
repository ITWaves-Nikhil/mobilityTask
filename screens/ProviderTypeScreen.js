import {View, Image, Text, StyleSheet} from 'react-native';
import React from 'react';
import ProviderTypeCard from '../components/ui/ProviderTypeCard';
import CommonBg from '../components/shared/CommonBg';
import {paths as logos} from '../constants/assets';
import {ProviderTypes} from '../constants/Strings';
import {colors} from '../constants/GlobalStyles';

const ProviderTypeScreen = ({route, navigation}) => {
  function providersOnPressHandler(providerType) {
    navigation.navigate('FormScreen', {
      formType: 'login',
      userType: 'provider',
    });
  }
  return (
    <CommonBg>
      <View style={styles.userMenuContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Choose Provider Type</Text>
        </View>
        <View style={styles.cardsContainer}>
          <ProviderTypeCard
            onPress={() => providersOnPressHandler('snf_alf')}
            title={ProviderTypes.SNF_ALF.title}
            color={colors.cardBlue}
            text={ProviderTypes.SNF_ALF?.desc}
            source={logos.PROVIDER_TYPES.SNF_ALF}
          />
          <ProviderTypeCard
            onPress={() => providersOnPressHandler('med_op_centers')}
            title={ProviderTypes.MEDICAL_OP_CENTERS.title}
            color={colors.orange}
            text={ProviderTypes.MEDICAL_OP_CENTERS?.desc}
            source={logos.PROVIDER_TYPES.MEDICAL_OP_CENTERS}
          />
          <ProviderTypeCard
            onPress={() => providersOnPressHandler('hmo')}
            title={ProviderTypes.HMO.title}
            color={colors.indigo}
            text={ProviderTypes.HMO?.desc}
            source={logos.PROVIDER_TYPES.HMO}
          />
          <ProviderTypeCard
            onPress={() => providersOnPressHandler('workers')}
            title={ProviderTypes.WORKERS.title}
            color={colors.yellowGreen}
            text={ProviderTypes.WORKERS?.desc}
            source={logos.PROVIDER_TYPES.WORKERS}
          />
        </View>
      </View>
    </CommonBg>
  );
};

const styles = StyleSheet.create({
  userMenuContainer: {gap: 15, flex: 1, marginTop: 50},
  headerContainer: {padding: 8},
  headerText: {color: 'black', fontSize: 20, fontWeight: 'bold'},
  cardsContainer: {gap: 20, flex: 1},
});
export default ProviderTypeScreen;
