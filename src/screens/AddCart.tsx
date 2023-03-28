import React from 'react';
import {Box, Text} from 'native-base';
import CreditCard from '../components/AddCard/CreditCard';
import AddCardInputs from '../components/AddCard/AddCardInputs';
import Button from '../components/shared/Button';

const AddCart = () => {
  return (
    <Box flex={1} backgroundColor={'white'}>
      <CreditCard />
      <AddCardInputs />
      <Button
        onPress={() => {}}
        title="Add Card"
        style={{
          marginTop: 8,
        }}
      />
    </Box>
  );
};

export default AddCart;
