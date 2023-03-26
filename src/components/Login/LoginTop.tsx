import React from 'react';
import {Box, Image, Text} from 'native-base';
import {strings} from '../../utils/strings';

const LoginTop = () => {
  return (
    <Box
      h="400"
      alignItems="center"
      justifyContent="space-evenly"
      bg={{
        linearGradient: {
          colors: ['darkBlue.900', 'darkBlue.800'],
          start: [0, 0],
          end: [0, 1],
        },
      }}>
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
