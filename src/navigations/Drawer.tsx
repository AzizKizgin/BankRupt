import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  Account,
  Home,
  AddCart,
  QrCode,
  Transaction,
  TransactionHistory,
  Payment,
  Excange,
} from '../screens';
import AppDrawer from './AppDrawer';

const Drawer = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator drawerContent={(props) => <AppDrawer {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Account" component={Account} />
      <Drawer.Screen name="Add Cart" component={AddCart} />
      <Drawer.Screen name="Qr Code" component={QrCode} />
      <Drawer.Screen name="Transaction" component={Transaction} />
      <Drawer.Screen
        name="Transaction History"
        component={TransactionHistory}
      />
      <Drawer.Screen name="Payment" component={Payment} />
      <Drawer.Screen name="Excange" component={Excange} />
    </Drawer.Navigator>
  );
};

export default Drawer;
