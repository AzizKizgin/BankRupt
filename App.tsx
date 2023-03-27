import React from 'react';
import {Box, NativeBaseProvider, Text} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import Main from './src/navigations/Main';
import theme from './src/theme/theme';
import {ToastMessageProvider} from '@aziz_kizgin/react-native-toast-message';

const App = () => {
  const config = {
    dependencies: {
      'linear-gradient': require('react-native-linear-gradient').default,
    },
  };
  return (
    <NativeBaseProvider config={config} theme={theme}>
      <ToastMessageProvider>
        <NavigationContainer>
          <Main />
        </NavigationContainer>
      </ToastMessageProvider>
    </NativeBaseProvider>
  );
};

export default App;
