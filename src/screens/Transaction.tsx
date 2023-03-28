import React from 'react';
import {Box, HStack, Icon, Pressable, Text, VStack} from 'native-base';
import TransactionTop from '../components/Transaction/TransactionTop';
import InputWithLabel from '../components/shared/InputWithLabel';
import Button from '../components/shared/Button';
import {sendTransactionNotification} from '../utils/helpers';

const Transaction = () => {
  return (
    <Box flex={1} bg="white" paddingY={10}>
      <TransactionTop />
      <VStack
        space={4}
        marginTop={12}
        alignItems="center"
        justifyContent="center">
        <InputWithLabel
          label="From Bank Account"
          value="00 455 785"
          height={12}
        />
        <InputWithLabel
          label="To Bank Account"
          value="04 377 049"
          height={12}
        />
        <InputWithLabel label="Amount" value="$1000" height={12} />
        <InputWithLabel label="Description" value="Salary" height={12} />
        <Button
          style={{
            marginTop: 8,
          }}
          title="Transfer"
          onPress={() => {
            sendTransactionNotification(
              'Transaction Successful',
              'You have successfully transferred $1000',
            );
          }}
        />
      </VStack>
    </Box>
  );
};

export default Transaction;
