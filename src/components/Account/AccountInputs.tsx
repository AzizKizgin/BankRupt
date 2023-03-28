import React from 'react';
import {VStack} from 'native-base';
import InputWithLabel from '../shared/InputWithLabel';

const AccountInputs = () => {
  return (
    <VStack space={4} marginTop={6} alignItems="center" justifyContent="center">
      <InputWithLabel label="Name" value="John Doe" />
      <InputWithLabel label="Email" value="john.doe@gmail.com" />
      <InputWithLabel label="Phone Number" value="1234567890" />
      <InputWithLabel label="Password" value="1234567890" />
    </VStack>
  );
};

export default AccountInputs;
