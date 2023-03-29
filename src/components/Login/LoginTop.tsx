import React from 'react';
import {Box, Image, Text} from 'native-base';
import {strings} from '../../utils/strings';
import {screenHeight} from '../../utils/consts';

const LoginTop = () => {
  return (
    <Box
      variant={'screenTop'}
      h={screenHeight / 2}
      justifyContent="space-evenly">
      <Text fontSize="3xl" color="white">
        {strings.welcome}
      </Text>
      <Image
        source={require('../../assets/images/bank.png')}
        alt="logo"
        width={'1/2'}
        height={'1/2'}
        resizeMode="contain"
        tintColor={'white'}
      />
    </Box>
  );
};

export default LoginTop;
