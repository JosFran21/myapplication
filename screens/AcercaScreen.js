import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { TabNavigator } from "react-navigation";

export default class AcercaScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>List of all chats</Text>
        <Button
          onPress={() => navigate('Chat', { user: 'Julia' })}
          title="Chat with Julia"
        />
      </View>
    );
  }
}