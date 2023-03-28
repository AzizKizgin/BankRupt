import React from 'react';
import {Box, HStack, Text} from 'native-base';
import TopButton from './TopButton';

const TrasactionHistoryTop = () => {
  return (
    <Box
      variant="screenTop"
      height="100"
      flexDirection="row"
      alignItems="flex-end">
      <HStack space={4} alignItems="center" justifyContent="center">
        <TopButton title="Complete" selected />
        <TopButton title="In Progress" />
      </HStack>
    </Box>
  );
};

export default TrasactionHistoryTop;
