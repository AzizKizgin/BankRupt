import React from 'react';
import {Box, HStack, Text, Icon} from 'native-base';
import MoneyIcon from './MoneyIcon';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const TransactionTop = () => {
  return (
    <HStack alignItems="center" alignSelf={'center'}>
      <MoneyIcon />
      <Box>
        <Icon
          as={MaterialCommunityIcons}
          name="swap-horizontal"
          size={24}
          color="darkBlue.900"
        />
      </Box>
    </HStack>
  );
};

export default TransactionTop;
