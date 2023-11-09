import 'react-native-gesture-handler';
import {StyleSheet, StatusBar} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import WelcomeScreen from './screens/WelcomeScreen';
import UserSelectScreen from './screens/UserSelectScreen';
import ProviderTypeScreen from './screens/ProviderTypeScreen';
import FormScreen from './screens/FormScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: 'black',
          // headerBackground: 'transparent',
        }}>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UserSelect"
          component={UserSelectScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProviderType"
          component={ProviderTypeScreen}
          options={{title: 'Provider Type', headerTransparent: true}}
        />
        <Stack.Screen
          name="FormScreen"
          component={FormScreen}
          options={{title: 'form', headerTransparent: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
