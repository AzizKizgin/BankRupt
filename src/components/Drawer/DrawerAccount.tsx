import React, {FC} from 'react';
import {Center, Pressable, Text, VStack} from 'native-base';
import AccountIcon from '../shared/AccountIcon';

interface DrawerAccountProps {
  onPress: () => void;
}

const DrawerAccount: FC<DrawerAccountProps> = ({onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <Center height={200}>
        <AccountIcon
          size={100}
          linearGradient={{
            startColor: 'darkBlue.700',
            endColor: 'darkBlue.400',
          }}
        />
        <VStack space={1} alignItems="center" marginY={2}>
          <Text color="white" fontSize="sm">
            John Doe
          </Text>
          <Text color="white" fontSize="xs">
            john.doe@gmail.com
          </Text>
        </VStack>
      </Center>
    </Pressable>
  );
};

export default DrawerAccount;
