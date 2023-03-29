import React from 'react';
import {Box, Text} from 'native-base';
import {screenWidth} from '../../utils/consts';

const MoneyIcon = () => {
  return (
    <Box
      borderWidth={10}
      borderColor="darkBlue.900"
      alignItems="center"
      justifyContent="center"
      width={screenWidth / 2}
      height={100}>
      <Box width={50} height={50} bg="darkBlue.900" rounded="full" />
      <Box
        width={6}
        height={6}
        bg="darkBlue.900"
        rounded="full"
        position="absolute"
        top={-10}
        right={-10}
      />
      <Box
        width={6}
        height={6}
        bg="darkBlue.900"
        rounded="full"
        position="absolute"
        top={-10}
        left={-10}
      />
      <Box
        width={6}
        height={6}
        bg="darkBlue.900"
        rounded="full"
        position="absolute"
        bottom={-10}
        right={-10}
      />
      <Box
        width={6}
        height={6}
        bg="darkBlue.900"
        rounded="full"
        position="absolute"
        bottom={-10}
        left={-10}
      />
    </Box>
  );
};

export default MoneyIcon;
