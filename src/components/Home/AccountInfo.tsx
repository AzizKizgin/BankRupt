import React from 'react';
import {Box, Text, VStack} from 'native-base';
import HomeAccountIcon from './HomeAccountIcon';
import BalanceBox from './BalanceBox';
import {screenHeight} from '../../utils/consts';

const AccountInfo = () => {
  return (
    <Box variant={'screenTop'} paddingY={6}>
      <VStack space={2} alignItems="center" justifyContent="center">
        <HomeAccountIcon />
        <VStack>
          <Text
            fontSize="lg"
            fontWeight="bold"
            color="white"
            textAlign="center">
            John Doe
          </Text>
          <Text fontSize="sm" color="white" textAlign="center">
            John.doe@gmail.com
          </Text>
        </VStack>
        <BalanceBox />
      </VStack>
    </Box>
  );
};

export default AccountInfo;
