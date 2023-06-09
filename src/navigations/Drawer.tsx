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
} from '../screens';
import AppDrawer from './AppDrawer';
import {Icon, theme} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Drawer = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      drawerContent={(props) => <AppDrawer {...props} />}
      screenOptions={({route}) => ({
        headerTintColor: 'white',
        drawerActiveTintColor: 'white',
        drawerActiveBackgroundColor: theme.colors.darkBlue[700],
        drawerInactiveTintColor: 'white',
        drawerItemStyle: {
          marginHorizontal: 0,
          paddingHorizontal: 10,
          borderTopRightRadius: 20,
          borderBottomRightRadius: 20,
          marginRight: 10,
        },
        headerStyle: {
          backgroundColor: theme.colors.darkBlue[900],
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
        headerRight: () => (
          <Icon
            as={Ionicons}
            name="settings-outline"
            size={6}
            color="white"
            mr={3}
          />
        ),
        drawerIcon: ({focused, color}) => {
          let iconName;
          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'Account':
              iconName = focused ? 'person' : 'person-outline';
              break;
            case 'Add Cart':
              iconName = focused ? 'card' : 'card-outline';
              break;
            case 'Qr Code':
              iconName = focused ? 'qr-code' : 'qr-code-outline';
              break;
            case 'Transaction':
              iconName = focused ? 'swap-vertical' : 'swap-vertical-outline';
              break;
            case 'Transaction History':
              iconName = focused ? 'time' : 'time-outline';
              break;
            case 'Payment':
              iconName = focused ? 'wallet' : 'wallet-outline';
              break;
          }
          return <Icon as={Ionicons} name={iconName} size={23} color={color} />;
        },
      })}>
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
    </Drawer.Navigator>
  );
};

export default Drawer;
