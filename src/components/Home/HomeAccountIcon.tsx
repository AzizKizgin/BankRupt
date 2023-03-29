import React from 'react';
import {Box, Icon, Text} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {screenWidth} from '../../utils/consts';

const HomeAccountIcon = () => {
  return (
    <Box
      width={screenWidth / 3}
      height={screenWidth / 3}
      rounded={'full'}
      backgroundColor={'white'}
      alignItems={'center'}
      justifyContent={'center'}>
      <Icon as={Ionicons} name="person" color="cyan.600" size={'24'} />
    </Box>
  );
};

export default HomeAccountIcon;
