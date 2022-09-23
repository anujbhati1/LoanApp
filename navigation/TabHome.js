import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AppColor} from '../src/screen/utils/AppColor';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../src/screen/Home';
import Profile from '../src/screen/Home/Profile';
import GroupScreen from '../src/screen/Home/GroupScreen';
import ReceiptsScreen from '../src/screen/Home/ReceiptsScreen';
import {createStackNavigator} from '@react-navigation/stack';
import CheckoutScreen from '../src/screen/Home/CheckoutScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function TabHome() {
  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions={{
        tabBarActiveTintColor: AppColor.f4,
        headerShown: false,
      }}>
      <Tab.Screen
        name="HomeTab"
        component={HomeTab}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="home-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Groups"
        component={GroupScreen}
        options={{
          tabBarLabel: 'Groups',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="grid-large"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Receipts"
        component={ReceiptsScreen}
        options={{
          tabBarLabel: 'Receipts',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="credit-card-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="account-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const HomeTab = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="checkoutScreen" component={CheckoutScreen} />
    </Stack.Navigator>
  );
};
