import React from 'react';
import {Box, HStack, Image} from 'native-base';

const SignUpTop = () => {
  return (
    <Box
      alignItems="center"
      justifyContent="center"
      height={200}
      bg={{
        linearGradient: {
          colors: ['darkBlue.900', 'darkBlue.800'],
          start: [0, 0],
          end: [0, 1],
        },
      }}>
      <HStack alignItems="center" justifyContent={'center'}>
        <Image
          source={require('../../assets/images/bank.png')}
          alt="logo"
          width={100}
          height={100}
          resizeMode="contain"
          tintColor={'white'}
        />
        <Image
          source={require('../../assets/images/link.png')}
          alt="logo"
          width={50}
          height={50}
          resizeMode="contain"
          tintColor={'white'}
          style={{transform: [{rotate: '45deg'}]}}
          marginLeft={2}
        />
        <Box
          marginLeft={4}
          borderColor={'white'}
          borderWidth={4}
          borderRadius={10}
          width={50}
          height={90}>
          <Box
            borderBottomRadius={10}
            alignSelf={'center'}
            width={6}
            height={1}
            bg={'white'}
          />
        </Box>
      </HStack>
    </Box>
  );
};

export default SignUpTop;
