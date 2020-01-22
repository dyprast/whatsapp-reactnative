import React, { Component } from 'react';
import { AppLoading } from 'expo';
import { Text, Container, Header, Body, Right, Button, Icon, Title, Tab, Tabs, TabHeading, View } from 'native-base';

import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

import CameraScreen from './screens/CameraScreen';
import ChatsScreen from './screens/ChatsScreen';
import StatusScreen from './screens/StatusScreen';
import CallsScreen from './screens/CallsScreen';
import { StatusBar } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Container style={{backgroundColor: '#075E54'}}>
        <StatusBar barStyle="light-content" /> 
        <Header androidStatusBarColor="#075E54" style={{backgroundColor: '#075E54', paddingLeft: 20}}>
          <Body>
            <Title>WhatsApp</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='search' />
            </Button>
            <Button transparent>
              <Icon name='more' />
            </Button>
          </Right>
        </Header>
        <Tabs tabContainerStyle={{elevation:0}}>
          <Tab heading={ <TabHeading style={{backgroundColor: '#075E54'}}><Icon style={{color: "#FFFFFF"}} name="camera" /></TabHeading>}>
            <CameraScreen></CameraScreen>
          </Tab>
          <Tab heading={ <TabHeading style={{backgroundColor: '#075E54'}}><Text style={{fontSize: 14, fontWeight: "bold", color: "#FFFFFF"}}>CHATS</Text></TabHeading>}>
            <ChatsScreen></ChatsScreen>
          </Tab>
          <Tab heading={ <TabHeading style={{backgroundColor: '#075E54'}}><Text style={{fontSize: 14, fontWeight: "bold", color: "#FFFFFF"}}>STATUS</Text></TabHeading>}>
            <StatusScreen></StatusScreen>
          </Tab>
          <Tab heading={ <TabHeading style={{backgroundColor: '#075E54'}}><Text style={{fontSize: 14, fontWeight: "bold", color: "#FFFFFF"}}>CALLS</Text></TabHeading>}>
            <CallsScreen></CallsScreen>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
