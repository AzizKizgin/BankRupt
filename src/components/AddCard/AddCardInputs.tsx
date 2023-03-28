import React from 'react';
import {Box, Text, VStack} from 'native-base';
import InputWithLabel from '../shared/InputWithLabel';
import {strings} from '../../utils/strings';

const AddCardInputs = () => {
  return (
    <VStack space={4} marginTop={6} alignItems="center" justifyContent="center">
      <InputWithLabel label="Name" value="John Doe" editable={false} />
      <InputWithLabel label="Card Number" value="1234567890" editable={false} />
      <InputWithLabel label="Expiry Date" value="12/22" editable={false} />
      <InputWithLabel
        label="Password"
        value="1234567890"
        isPassword={true}
        editable={false}
      />
      <Text
        fontSize={'sm'}
        color={'darkBlue.900'}
        width={'80%'}
        textAlign={'center'}>
        {strings.byAddingCard}
      </Text>
    </VStack>
  );
};

export default AddCardInputs;
