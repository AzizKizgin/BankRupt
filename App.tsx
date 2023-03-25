import React from 'react';
import {Box, NativeBaseProvider, Text} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import Main from './src/navigations/Main';

const App = () => {
  const config = {
    dependencies: {
      'linear-gradient': require('react-native-linear-gradient').default,
    },
  };
  return (
    <NativeBaseProvider config={config}>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
