import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Image,
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
import ServicesScreen from './screens/ServicesScreen';
import AcercaScreen from './screens/AcercaScreen';
import FontAwesome, { Icons } from "react-native-fontawesome";

const styles = StyleSheet.create({
	tab: {
		padding: 0
	},
	indicator: {
		width: 0,
		height: 0
	},
	label: {
		fontSize: 10
	},
	icon: {
		width: 28,
		height: 28,
		//backgroundColor: '#f2c100',
  	},
	tabBar: {
		backgroundColor: 'black',
	}
});

const MainScreenNavigator  = TabNavigator({
  Inicio: { screen: HomeScreen,
  navigationOptions: ({ navigation }) => ({
				title: "Inicio",
        tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('./images/valid-512.png')}
          style={[styles.icon, {tintColor: tintColor}]}/>
      ),
			}) },
  Acerca: {screen: AcercaScreen,
    navigationOptions: ({ navigation }) => ({
				title: "Acerca de",
				tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('./images/icons/visa.png')}
          style={[styles.icon, {tintColor: tintColor}]}/>
      ),
			})  },
  Servicios: {screen: ServicesScreen,
    navigationOptions: ({ navigation }) => ({
				title: "Servicios",
			tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('./images/idea1.png')}
          style={[styles.icon, {tintColor: tintColor}]}/>
      ),
			})  },
  Suscripciones: { screen: AllContactsScreen,
  navigationOptions: ({ navigation }) => ({
				title: "Suscripciones",
				tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('./images/icons/mastercard.png')}
          style={[styles.icon, {tintColor: tintColor}]}/>
      ),
			})  },
}, 
  {
		//initialRouteName: "ScoresAndOdds",
		lazyLoad: true,
    tabBarPosition: 'bottom',
		swipeEnabled: true,
		animationEnabled: true,
		lazy: true,
		//order: ["Videos", "ScoresAndOdds", "Picks", "MyScores"],
		//backBehavior: "initialRoute",
		tabBarOptions: {
      activeTintColor: '#f2c100',
			inactiveTintColor: 'white',
			showLabel: true,
			showIcon: true,
			upperCaseLabel: false,
			pressColor: 'white',
			scrollEnabled: false,
			tabStyle: styles.tab,
			//indicatorStyle: styles.indicator,
			labelStyle: styles.label,
			//iconStyle: styles.icon,
			style: styles.tabBar
		}
	}
  
  );

const myapp = StackNavigator({
  Home: { 
    screen: MainScreenNavigator,
    navigationOptions: {
      title: 'Here You Win',
    },
  },
  Chat: { screen: ChatScreen },
  Login: { screen: LoginScreen },
}
	


)

// if you are using create-react-native-app you don't need this line
AppRegistry.registerComponent('myapp', () => myapp);








  // navigator config
  /*{
    lazyLoad: true, // render the tabs lazily
    tabBarPosition: 'bottom', // where are the tabs shown
    backBehavior: 'none', // back button doesn't take you to the initial tab
    tabBarOptions: {
    activeTintColor: '#f2c100',
    labelStyle: {
      fontSize: 11,
      padding:  -10,
      margin: -10,
      height: 20,
      },
      style: {
        backgroundColor: 'black',
      },
    },
  },*/