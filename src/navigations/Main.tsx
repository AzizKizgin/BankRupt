import React from 'react';
import {Box, Text} from 'native-base';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Authentication from './Authentication';
import Drawer from './Drawer';

const Main = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Drawer" component={Drawer} />
      <Stack.Screen
        name="Authentication"
        component={Authentication}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Main;
