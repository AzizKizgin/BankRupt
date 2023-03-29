import React from 'react';
import {Box, Text} from 'native-base';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Authentication from './Authentication';
import Drawer from './Drawer';
import {SplashScreen} from '../screens';

const Main = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="SplashScreen">
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="App" component={Drawer} />
      <Stack.Screen
        name="Authentication"
        component={Authentication}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Main;
