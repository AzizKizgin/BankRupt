import React from 'react';
import {Box, Text} from 'native-base';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login, SignUp} from '../screens';

const Authentication = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={SignUp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Authentication;
