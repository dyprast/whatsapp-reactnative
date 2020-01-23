import React, { Component } from 'react';
import { Body, Text, Right, Left, Content, List, ListItem, Thumbnail, Fab, Icon, View, Container, Button } from 'native-base';

export default class ChatsScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      active: false
    };
  }

  render() {
    return (
      <Container>
      <Content>
          <List>
            <ListItem avatar>
                <Left>
                  <Thumbnail source={{ uri: 'https://avatars1.githubusercontent.com/u/32610424?s=460&v=4' }} style={{ width: 54, height: 54, marginBottom: 5 }} />
                </Left>
                <Body>
                  <Text>Romadhan Prasetyo</Text>
                <Text note>Hello, how are you?</Text>
                </Body>
                <Right>
                  <Text note>3:43 PM</Text>
                </Right>
            </ListItem>
            <ListItem avatar>
                <Left>
                  <Thumbnail source={{ uri: 'https://specials-images.forbesimg.com/imageserve/5c76b7d331358e35dd2773a9/416x416.jpg?background=000000&cropX1=0&cropX2=4401&cropY1=0&cropY2=4401' }} style={{ width: 54, height: 54, marginBottom: 5 }} />
                </Left>
                <Body>
                  <Text>Mark Zuckerberg</Text>
                <Text note>Hello, how are you?</Text>
                </Body>
                <Right>
                  <Text note>3:43 PM</Text>
                </Right>
            </ListItem>
            <ListItem avatar>
                <Left>
                  <Thumbnail source={{ uri: 'https://images.wsj.net/im-105325?width=620&size=1.5' }} style={{ width: 54, height: 54, marginBottom: 5 }} />
                </Left>
                <Body>
                  <Text>Bill Gates</Text>
                <Text note>Hello, how are you?</Text>
                </Body>
                <Right>
                  <Text note>3:43 PM</Text>
                </Right>
            </ListItem>
            <ListItem avatar>
                <Left>
                  <Thumbnail source={{ uri: 'https://static.businessinsider.sg/2019/03/03/5b748ea80ce5f519008b55fa.png' }} style={{ width: 54, height: 54, marginBottom: 5 }} />
                </Left>
                <Body>
                  <Text>Larry Page</Text>
                <Text note>Hello, how are you?</Text>
                </Body>
                <Right>
                  <Text note>3:43 PM</Text>
                </Right>
            </ListItem>
          </List>
      </Content>
      <Fab
        active={this.state.active}
        direction="up"
        containerStyle={{ }}
        style={{ backgroundColor: '#25d366', position: "absolute", bottom: 0, right: 0}}
        position="bottomRight"
        onPress={() => this.setState({ active: !this.state.active })}>
        <Icon name="chatboxes" />
      </Fab>
      </Container>
    );
  }
}