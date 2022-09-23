LogBox.ignoreAllLogs();
import {LogBox} from 'react-native';
import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from './src/screen/Auth/Splash';
import SignUp from './src/screen/Auth/SignUp';
import Login from './src/screen/Auth/Login';
import ForgotPassword from './src/screen/Auth/Forgotpassword';
import Profile from './src/screen/Home/Profile';
import TabHome from './navigation/TabHome';
import NewReceiptScreen from './src/screen/Home/NewReceiptScreen';
import ReceiptReviewScreen from './src/screen/Home/ReceiptReviewScreen';

const Stack = createStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="splash">
      <Stack.Screen name="splash" component={Splash} />
      <Stack.Screen name="signup" component={SignUp} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="forgotpassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Auth">
        <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen name="TabHome" component={TabHome} />
        <Stack.Screen name="profile" component={Profile} />
        <Stack.Screen name="newReceiptScreen" component={NewReceiptScreen} />
        <Stack.Screen
          name="ReceiptReviewScreen"
          component={ReceiptReviewScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
