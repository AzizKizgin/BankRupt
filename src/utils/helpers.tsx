import notifee, {
  AndroidCategory,
  AndroidImportance,
} from '@notifee/react-native';
import {theme} from 'native-base';

export const transactionType = (
  type: number,
): {
  name: string;
  colors: string[];
} => {
  switch (type) {
    case 0:
      return {
        name: 'Received payment',
        colors: ['green.700', 'green.400'],
      };
    case 1:
      return {
        name: 'Transfer Money',
        colors: ['blue.700', 'blue.400'],
      };
    case 2:
      return {
        name: 'Gas & Electricity payment',
        colors: ['yellow.700', 'yellow.400'],
      };
    case 3:
      return {
        name: 'Withdraw Money',
        colors: ['red.700', 'red.400'],
      };
    default:
      return {
        name: 'Received payment',
        colors: ['green.700', 'green.400'],
      };
  }
};

export async function sendTransactionNotification(
  title: string,
  message: string,
) {
  const channelId = await notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
  });

  await notifee.displayNotification({
    title: title,
    body: message,
    android: {
      channelId,
      category: AndroidCategory.CALL,
      importance: AndroidImportance.HIGH,
      fullScreenAction: {
        id: 'default',
      },
      color: theme.colors.darkBlue[900],
      smallIcon: 'ic_launcher',
    },
  });
}
