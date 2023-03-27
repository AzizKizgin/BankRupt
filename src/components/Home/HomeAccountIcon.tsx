import React from 'react';
import {Box, Icon, Text} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeAccountIcon = () => {
  return (
    <Box
      width={125}
      height={125}
      rounded={'full'}
      backgroundColor={'white'}
      alignItems={'center'}
      justifyContent={'center'}>
      <Icon as={Ionicons} name="person" color="cyan.600" size={'24'} />
    </Box>
  );
};

export default HomeAccountIcon;
