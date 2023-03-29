import React from 'react';
import {Box, FlatList, ScrollView, Text} from 'native-base';
import PaymentTop from '../components/Payment/PaymentTop';
import Category from '../components/Payment/Category';
import {categories} from '../utils/fakeData';

const Payment = () => {
  return (
    <Box flex={1} backgroundColor="white">
      <ScrollView>
        <PaymentTop />
        <FlatList
          scrollEnabled={false}
          contentContainerStyle={{
            alignItems: 'center',
            justifyContent: 'center',
            paddingBottom: 20,
          }}
          paddingTop={8}
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
      </ScrollView>
    </Box>
  );
};

export default Payment;
