import React from 'react';
import {Box, ScrollView, Text} from 'native-base';
import AccountInfo from '../components/Home/AccountInfo';
import LatestTransactions from '../components/Home/LatestTransactions';

const Home = () => {
  return (
    <Box backgroundColor="white" flex={1}>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 20,
        }}>
        <AccountInfo />
        <LatestTransactions />
      </ScrollView>
    </Box>
  );
};

export default Home;
