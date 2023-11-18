import {View, Text} from 'react-native';

import CommonBg from '../../components/shared/commonBg/index';
import ProviderTypeCard from '../../components/ui/providerTypeCard/index';

import {paths as logos} from '../../constants/assets';
import {ProviderTypes} from '../../constants/strings';
import {COLORS} from '../../constants/theme';
import {styles} from './styles';
import {NAVIGATION} from '../../constants/navigation';
import {PROVIDER_VALUES} from '../../constants/enums';

const ProviderTypeScreen = ({route, navigation}) => {
  function providersOnPressHandler(providerType) {
    navigation.navigate(NAVIGATION.SCREEN_NAMES.FORM_SCREEN, {
      formType: 'login',
      userType: 'provider',
      providerType: providerType,
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
            onPress={() => providersOnPressHandler(PROVIDER_VALUES.SNF_ALF)}
            title={ProviderTypes.SNF_ALF.title}
            color={COLORS.cardBlue}
            text={ProviderTypes.SNF_ALF?.desc}
            source={logos.PROVIDER_TYPES.SNF_ALF}
          />
          <ProviderTypeCard
            onPress={() =>
              providersOnPressHandler(
                PROVIDER_VALUES.Medical_Centers_OP_Centers,
              )
            }
            title={ProviderTypes.MEDICAL_OP_CENTERS.title}
            color={COLORS.orange}
            text={ProviderTypes.MEDICAL_OP_CENTERS?.desc}
            source={logos.PROVIDER_TYPES.MEDICAL_OP_CENTERS}
          />
          <ProviderTypeCard
            onPress={() => providersOnPressHandler(PROVIDER_VALUES.HMO)}
            title={ProviderTypes.HMO.title}
            color={COLORS.indigo}
            text={ProviderTypes.HMO?.desc}
            source={logos.PROVIDER_TYPES.HMO}
          />
          <ProviderTypeCard
            onPress={() =>
              providersOnPressHandler(PROVIDER_VALUES.Workers_Comp)
            }
            title={ProviderTypes.WORKERS.title}
            color={COLORS.yellowGreen}
            text={ProviderTypes.WORKERS?.desc}
            source={logos.PROVIDER_TYPES.WORKERS}
          />
        </View>
      </View>
    </CommonBg>
  );
};

export default ProviderTypeScreen;
