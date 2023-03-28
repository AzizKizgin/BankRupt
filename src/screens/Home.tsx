import React from 'react';
import {Box, Text} from 'native-base';
import AccountInfo from '../components/Home/AccountInfo';
import LatestTransactions from '../components/Home/LatestTransactions';

const Home = () => {
  return (
    <Box backgroundColor="white" flex={1}>
      <AccountInfo />
      <LatestTransactions />
    </Box>
  );
};

export default Home;
