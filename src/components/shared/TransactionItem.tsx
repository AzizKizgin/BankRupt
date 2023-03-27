import React, {FC} from 'react';
import {Box, HStack, Text} from 'native-base';
import {transactionType} from '../../utils/helpers';

interface TransactionItemProps {
  transaction: Transaction;
}

const TransactionItem: FC<TransactionItemProps> = (props) => {
  const {transaction} = props;
  return (
    <HStack alignItems="center" marginTop={4} justifyContent="space-between">
      <HStack space={2} alignItems="center">
        <Box
          bg={{
            linearGradient: {
              colors: transactionType(transaction.type).colors,
              start: [0, 0],
              end: [0, 1],
            },
          }}
          width={10}
          height={10}
          rounded="full"
        />
        <Box>
          <Text fontSize="md">{transaction.title}</Text>
          <Text fontSize="sm" color="gray.500">
            {transactionType(transaction.type).name}
          </Text>
        </Box>
      </HStack>
      <Text fontSize="md" color="gray.500">
        {transaction.type !== 0 && '-'}
        {transaction.amount}
      </Text>
    </HStack>
  );
};

export default TransactionItem;
