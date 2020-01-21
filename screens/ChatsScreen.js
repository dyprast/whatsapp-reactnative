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
                  <Thumbnail source={{ uri: 'https://specials-images.forbesimg.com/imageserve/5c76b7d331358e35dd2773a9/416x416.jpg?background=000000&cropX1=0&cropX2=4401&cropY1=0&cropY2=4401' }} style={{ width: 55, height: 55, marginBottom: 5 }} />
                </Left>
                <Body>
                  <Text>Mark Zuckerberg</Text>
                <Text note>Hello, how are you?</Text>
                </Body>
                <Right>
                  <Text note>3:43 PM</Text>
                  <Button transparent><Icon name="checkmark" color="#0091EA"></Icon></Button>
                </Right>
            </ListItem>
          </List>
      </Content>
      <Fab
        active={this.state.active}
        direction="up"
        containerStyle={{ }}
        style={{ backgroundColor: '#075E54', position: "absolute", bottom: 0, right: 0}}
        position="bottomRight"
        onPress={() => this.setState({ active: !this.state.active })}>
        <Icon name="chatboxes" />
      </Fab>
      </Container>
    );
  }
}