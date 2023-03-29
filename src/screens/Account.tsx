import React from 'react';
import {Box, Center, Input, ScrollView, Text, VStack} from 'native-base';
import AccountIcon from '../components/shared/AccountIcon';
import InputWithLabel from '../components/shared/InputWithLabel';
import AccountInputs from '../components/Account/AccountInputs';
import Button from '../components/shared/Button';

const Account = () => {
  return (
    <Box flex={1} backgroundColor={'white'}>
      <ScrollView contentContainerStyle={{paddingBottom: 20}}>
        <Center paddingY={6}>
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
      </ScrollView>
    </Box>
  );
};

export default Account;
