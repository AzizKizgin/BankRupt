import React from 'react';
import {Box, FlatList, Text} from 'native-base';
import PaymentTop from '../components/Payment/PaymentTop';
import Category from '../components/Payment/Category';
import {categories} from '../utils/fakeData';

const Payment = () => {
  return (
    <Box flex={1} backgroundColor="white">
      <PaymentTop />
      <FlatList
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
        marginTop={8}
        padding={4}
        data={categories}
        renderItem={({item}) => (
          <Category
            key={item.id}
            title={item.title}
            icon={item.icon}
            color={item.color}
          />
        )}
        numColumns={3}
      />
    </Box>
  );
};

export default Payment;
