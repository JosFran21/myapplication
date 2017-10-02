import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { TabNavigator } from "react-navigation";
import ChatScreen from './screens/ChatScreen';
import RecentChatsScreen from './screens/RecentChatScreen';



class AllContactsScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>List of recent chats</Text>
        <Button
          onPress={() => navigate('Chat', { user: 'Julia' })}
          title="Chat with Julia"
        />
      </View>
    );
  }
}

const MainScreenNavigator  = TabNavigator({
  Recent: { screen: RecentChatsScreen },
  All: { screen: AllContactsScreen },
});

class HomeScreen extends React.Component {
  static navigationOptions = {
   
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, Chat App!</Text>
        <Button
          onPress={() => navigate('Chat', { user: 'Pedro' })}
          title="Chat"
        />
      </View>
    );
  }
}


const myapp = StackNavigator({
  Home: { 
    screen: MainScreenNavigator,
    navigationOptions: {
      title: 'My Chats',
    },
  },
  Chat: { screen: ChatScreen },
})

// if you are using create-react-native-app you don't need this line
AppRegistry.registerComponent('myapp', () => myapp);