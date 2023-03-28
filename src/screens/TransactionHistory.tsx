import React from 'react';
import {Box, ScrollView} from 'native-base';
import TrasactionHistoryTop from '../components/TransactionHistory/TrasactionHistoryTop';
import {fakeData} from '../utils/fakeData';
import TransactionItem from '../components/shared/TransactionItem';
import PageSelector from '../components/TransactionHistory/PageSelector';

const TransactionHistory = () => {
  const transactions: Transaction[] = fakeData.slice(0, 8);
  return (
    <Box flex={1} bg="white">
      <TrasactionHistoryTop />
      <ScrollView
        paddingX={6}
        paddingY={4}
        flex={1}
        contentContainerStyle={{paddingBottom: 100}}>
        {transactions.map((transaction: Transaction, index) => (
          <TransactionItem key={index} transaction={transaction} />
        ))}
        <PageSelector />
      </ScrollView>
    </Box>
  );
};

export default TransactionHistory;
