import React from 'react';
import {Box, Text} from 'native-base';

const CreditCard = () => {
  return (
    <Box
      width={200}
      height={120}
      bg={{
        linearGradient: {
          colors: ['cyan.600', 'cyan.500'],
          start: [0, 0],
          end: [1, 0],
        },
      }}
      alignSelf={'center'}
      marginTop={10}
      paddingX={1}
      borderRadius={10}>
      <Box>
        <Box
          width={'100%'}
          backgroundColor={'white'}
          height={6}
          marginTop={5}
          borderRadius={2}
        />
        <Box
          width={'20%'}
          backgroundColor={'white'}
          height={3}
          marginLeft={3}
          marginTop={3}
          borderRadius={2}
        />
      </Box>
    </Box>
  );
};

export default CreditCard;
