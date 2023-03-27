import React, {FC} from 'react';
import {Center, Icon} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface AccountIconProps {
  size: number;
  linearGradient?: {
    startColor: string;
    endColor: string;
  };
}
const AccountIcon: FC<AccountIconProps> = (props) => {
  const {
    size,
    linearGradient = {
      startColor: 'white',
      endColor: 'white',
    },
  } = props;
  return (
    <Center
      width={size}
      height={size}
      rounded="full"
      bg={{
        linearGradient: {
          colors: [linearGradient.startColor, linearGradient.endColor],
          start: [0, 0],
          end: [0, 1],
        },
      }}>
      <Icon as={Ionicons} name="person" size="16" color="gray.200" />
    </Center>
  );
};

export default AccountIcon;
