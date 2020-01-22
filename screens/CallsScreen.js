import React, { Component } from 'react';
import { Body, Text, Right, Left, Content, List, ListItem, Thumbnail, Fab, Icon, Container, Button } from 'native-base';

export default class CallsScreen extends Component {

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
                <Thumbnail source={{ uri: 'https://specials-images.forbesimg.com/imageserve/5c76b7d331358e35dd2773a9/416x416.jpg?background=000000&cropX1=0&cropX2=4401&cropY1=0&cropY2=4401' }} style={{ width: 54, height: 54}} />
              </Left>
              <Body>
                <Text>Mark Zuckerberg</Text>
                <Text note><Icon name="undo" style={{color: "#F22C2C",}} /> 12 January, 20:22</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Icon name="call" style={{ color: "#F22C2C" }} />
                </Button>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://specials-images.forbesimg.com/imageserve/5c76b7d331358e35dd2773a9/416x416.jpg?background=000000&cropX1=0&cropX2=4401&cropY1=0&cropY2=4401' }} style={{ width: 54, height: 54}} />
              </Left>
              <Body>
                <Text>Mark Zuckerberg</Text>
                <Text note><Icon name="redo" style={{color: "#0091EA",}} /> 10 December 2019, 02:11</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Icon name="videocam" style={{ color: "#075E54" }} />
                </Button>
              </Right>
            </ListItem>
          </List>
        </Content>
        <Fab
          active={this.state.active}
          direction="up"
          containerStyle={{ }}
          style={{ backgroundColor: '#075E54' }}
          position="bottomRight"
          onPress={() => this.setState({ active: !this.state.active })}>
          <Icon name="call" />
        </Fab>
      </Container>
    );
  }
}