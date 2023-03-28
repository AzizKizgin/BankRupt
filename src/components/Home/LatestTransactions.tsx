import React from 'react';
import {Box, Center, HStack, Text} from 'native-base';
import {fakeData} from '../../utils/fakeData';
import {strings} from '../../utils/strings';
import TransactionItem from '../shared/TransactionItem';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const LatestTransactions = () => {
  const transactions: Transaction[] = fakeData.slice(0, 4);
  const navigation = useNavigation<NativeStackNavigationProp<MainParamList>>();
  const onMorePress = () => {
    navigation.navigate('Transaction History');
  };
  return (
    <Box paddingX={6} flex={1}>
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
