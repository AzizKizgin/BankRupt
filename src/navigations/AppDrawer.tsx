import React from 'react';
import {Box, Text} from 'native-base';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import DrawerAccount from '../components/Drawer/DrawerAccount';

const AppDrawer = (props: DrawerContentComponentProps) => {
  const {navigation} = props;
  const onAccountPress = () => {
    navigation.navigate('Account');
  };
  return (
    <Box flex={1} backgroundColor="darkBlue.900">
      <DrawerAccount onPress={onAccountPress} />
      <DrawerContentScrollView>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <Box>
        <Text color="gray.300" fontSize="sm" p={2}>
          Version 1.0.0
        </Text>
      </Box>
    </Box>
  );
};

export default AppDrawer;
