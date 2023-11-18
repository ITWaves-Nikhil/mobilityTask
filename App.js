import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {store} from './redux/store';
import {Provider} from 'react-redux';

import WelcomeScreen from './screens/welcomeScreen/index';
import UserSelectScreen from './screens/userSelectScreen/index';
import ProviderTypeScreen from './screens/providerTypeScreen/index';
import FormScreen from './screens/formScreen/index';
import HomeScreen from './screens/homeScreen/index';
import {NAVIGATION} from './constants/navigation';
import {COLORS, FONTS} from './constants/theme';

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTintColor: COLORS.black,
            gestureEnabled: true,
            headerTitleStyle: {
              fontFamily: FONTS.MEDIUM,
            },
          }}>
          <Stack.Screen
            name={NAVIGATION.SCREEN_NAMES.WELCOME_SCREEN}
            component={WelcomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={NAVIGATION.SCREEN_NAMES.USER_SELECT}
            component={UserSelectScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={NAVIGATION.SCREEN_NAMES.PROVIDER_TYPE}
            component={ProviderTypeScreen}
            options={{
              title: NAVIGATION.SCREEN_TITLES.PROVIDER_TYPE_TITLE,
              headerTransparent: true,
            }}
          />
          <Stack.Screen
            name={NAVIGATION.SCREEN_NAMES.FORM_SCREEN}
            component={FormScreen}
            options={{
              title: NAVIGATION.SCREEN_TITLES.FORM_SCREEN_TITLE,
              headerTransparent: true,
            }}
          />
          <Stack.Screen
            name={NAVIGATION.SCREEN_NAMES.HOME_SCREEN}
            component={HomeScreen}
            options={{
              title: NAVIGATION.SCREEN_TITLES.HOME_SCREEN_TITLE,
              headerTransparent: true,
              gestureEnabled: false,
              headerLeft: () => null,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
