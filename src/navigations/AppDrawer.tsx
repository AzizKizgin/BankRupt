import React from 'react';
import {Box, Text} from 'native-base';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

const AppDrawer = (props: DrawerContentComponentProps) => {
  return (
    <Box flex={1}>
      <DrawerContentScrollView>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </Box>
  );
};

export default AppDrawer;
