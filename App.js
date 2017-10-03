import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  Button,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { TabNavigator } from "react-navigation";
import ChatScreen from './screens/ChatScreen';
import RecentChatScreen from './screens/RecentChatScreen';
import AllContactsScreen from './screens/AllContactsScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';


/*class MyHomeScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('./images/icons/menu_servicios.svg')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    );
  }
}

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Notifications',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('./images/icons/menu_acercade.svg')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});

const MyApp = TabNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Notifications: {
    screen: MyNotificationsScreen,
  },
}, {
  barTintColor: 'black',
  tabBarPosition: 'top',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#f2c100',
  },
});
AppRegistry.registerComponent('myapp', () => MyApp);
*/
const MainScreenNavigator  = TabNavigator({
  Inicio: { screen: HomeScreen },
  Suscripciones: { screen: AllContactsScreen },
});

const myapp = StackNavigator({
  Home: { 
    screen: MainScreenNavigator,
    navigationOptions: {
      title: 'Here You Win',
    },
  },
  Chat: { screen: ChatScreen },
  Login: { screen: LoginScreen },
})

// if you are using create-react-native-app you don't need this line
AppRegistry.registerComponent('myapp', () => myapp);
