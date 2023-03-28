import React from 'react';
import {Box, Center, Input, Text, VStack} from 'native-base';
import AccountIcon from '../components/shared/AccountIcon';
import InputWithLabel from '../components/shared/InputWithLabel';
import AccountInputs from '../components/Account/AccountInputs';
import Button from '../components/shared/Button';

const Account = () => {
  return (
    <Box flex={1} backgroundColor={'white'} paddingY={6}>
      <Center>
        <AccountIcon
          size={100}
          linearGradient={{
            startColor: 'cyan.600',
            endColor: 'cyan.400',
          }}
        />
      </Center>
      <AccountInputs />
      <Button
        onPress={() => {}}
        title="Save Changes"
        style={{
          marginTop: 8,
        }}
      />
    </Box>
  );
};

export default Account;
