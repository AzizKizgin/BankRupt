import React from 'react';
import {Box, Text} from 'native-base';
import AccountIcon from '../shared/AccountIcon';
import {screenHeight} from '../../utils/consts';

const PaymentTop = () => {
  return (
    <Box variant="screenTop" height={screenHeight / 4} flexDirection="row">
      <AccountIcon size={100} color="darkBlue.900" />
      <Box justifyContent="center" alignItems="flex-start" marginLeft={5}>
        <Text color="darkBlue.200" fontSize="lg">
          Balance
        </Text>
        <Text color="white" fontSize="4xl" fontWeight="bold">
          $4,180,20
        </Text>
      </Box>
    </Box>
  );
};

export default PaymentTop;
