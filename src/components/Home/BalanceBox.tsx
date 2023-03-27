import React from 'react';
import {Box, Text} from 'native-base';
import Button from '../shared/Button';

const BalanceBox = () => {
  return (
    <Box
      w={250}
      height={125}
      backgroundColor="white"
      alignItems="center"
      justifyContent="center"
      borderRadius={10}>
      <Text fontSize="lg" fontWeight="bold" color="cyan.600">
        Balance
      </Text>
      <Text fontSize="3xl" fontWeight="bold" color="darkBlue.900">
        $4,180.20
      </Text>
      <Button onPress={() => {}} title="Transfer" />
    </Box>
  );
};

export default BalanceBox;
