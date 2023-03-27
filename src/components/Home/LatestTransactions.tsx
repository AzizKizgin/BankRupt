import React from 'react';
import {Box, Center, HStack, Text} from 'native-base';
import {fakeData} from '../../utils/fakeData';
import {strings} from '../../utils/strings';
import TransactionItem from '../shared/TransactionItem';

const LatestTransactions = () => {
  const transactions: Transaction[] = fakeData.slice(0, 4);
  return (
    <Box flex={1} paddingX={6}>
      <Center marginTop={4}>
        <Text fontSize="lg" fontWeight="bold" color="cyan.600">
          {strings.latestTransactions}
        </Text>
      </Center>
      {transactions.map((transaction: Transaction, index) => (
        <TransactionItem key={index} transaction={transaction} />
      ))}
    </Box>
  );
};

export default LatestTransactions;
