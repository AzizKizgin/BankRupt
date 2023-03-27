import React from 'react';
import {Box, Image, Text} from 'native-base';
import {strings} from '../../utils/strings';

const LoginTop = () => {
  return (
    <Box variant={'screenTop'} h="400" justifyContent="space-evenly">
      <Text fontSize="3xl" color="white">
        {strings.welcome}
      </Text>
      <Image
        source={require('../../assets/images/bank.png')}
        alt="logo"
        width={200}
        height={200}
        resizeMode="contain"
        tintColor={'white'}
      />
    </Box>
  );
};

export default LoginTop;
