import { Notifications } from 'expo';
import React from 'react';
import { StackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import registerForPushNotificationsAsync from '../api/registerForPushNotificationsAsync';
import LeanCloudAPI from '../api/leanCloud';

import GroupPurchase from '../screens/GroupPurchase/GroupPurchaseScene';
import GroupPurchase2 from '../screens/GroupPurchase/GroupPurchaseScene2';
import SearchScene from '../screens/Search/SearchScene';
import LoginScene from '../screens/login/components/LoginScreen';
const RootStackNavigator = StackNavigator(
  {
    Main: {
      screen: MainTabNavigator,
    },
    GroupPurchase: {
      screen: GroupPurchase,
    },
    GroupPurchase2: {
      screen: GroupPurchase2,
    },
    Search: {
      screen: SearchScene,
    },
    Login: {
      screen: LoginScene,
    }
  },
  {
    navigationOptions: () => ({
      headerTitleStyle: {
        fontWeight: 'normal',
      },
    }),
  }
);

export default class RootNavigator extends React.Component {
  componentDidMount() {
    this._notificationSubscription = this._registerForPushNotifications();
    LeanCloudAPI.init();
  }

  componentWillUnmount() {
    this._notificationSubscription && this._notificationSubscription.remove();
  }

  render() {
    return <RootStackNavigator />;
  }

  _registerForPushNotifications() {
    // Send our push token over to our backend so we can receive notifications
    // You can comment the following line out if you want to stop receiving
    // a notification every time you open the app. Check out the source
    // for this function in api/registerForPushNotificationsAsync.js
    registerForPushNotificationsAsync();

    // Watch for incoming notifications
    this._notificationSubscription = Notifications.addListener(this._handleNotification);
  }

  _handleNotification = ({ origin, data }) => {
    console.log(`Push notification ${origin} with data: ${JSON.stringify(data)}`);
  };
}
