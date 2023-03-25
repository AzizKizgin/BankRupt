import React from 'react';
import {Box, NativeBaseProvider, Text} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import Main from './src/navigations/Main';

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
