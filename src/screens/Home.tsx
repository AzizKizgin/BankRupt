import React, {useEffect, useState} from 'react';
import {Box, Text, VStack} from 'native-base';
import {Alert, BackHandler} from 'react-native';
import ExitAppModal from '../components/Home/ExitAppModal';
import HomeAccountIcon from '../components/Home/HomeAccountIcon';
import Button from '../components/shared/Button';
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
