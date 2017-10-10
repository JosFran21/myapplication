import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { TabNavigator } from "react-navigation";

export default class ServicesScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Servicios Here You WIn</Text>
        <Button
          onPress={() => navigate('Chat', { user: 'Julia' })}
          title="Chat with Julia"
        />
      </View>
    );
  }
}