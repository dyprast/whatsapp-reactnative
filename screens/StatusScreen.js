import React, { Component } from 'react';
import { Body, Text, Left, Content, List, ListItem, Thumbnail, Fab, Icon, View, Container, Badge, Button } from 'native-base';

export default class StatusScreen extends Component {

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
          <List style={{marginBottom: 7}}>
            <ListItem avatar noBorder>
                <Left>
                  <View style={{position: "relative", padding: 1.5}}>
                    <Thumbnail source={{ uri: 'https://avatars1.githubusercontent.com/u/32610424?s=460&v=4' }} style={{ width: 54, height: 54}} />
                    <Badge success style={{width:21, height:21, display: "flex", justifyContent: "center", alignItems: "center", position:"absolute", bottom: 0, right: 0}}><Icon name="add" style={{color: "#FFFFFF", fontSize: 13, fontWeight: "bold"}} /></Badge>
                  </View>
                </Left>
                <Body>
                  <Text>My Status</Text>
                  <Text note>Tap to add status update</Text>
                </Body>
            </ListItem>
          </List>

          <List style={{marginBottom: 7}}>
            <ListItem itemDivider>
              <Text note style={{fontWeight: "bold"}}>Recent updates</Text>
            </ListItem>
            <ListItem avatar>
              <Left>
                <View style={{borderRadius:50, borderColor: "#075E54", borderStyle:"dashed", borderWidth: 2.5, padding: 1.5}}>
                  <Thumbnail source={{ uri: 'https://specials-images.forbesimg.com/imageserve/5c76b7d331358e35dd2773a9/416x416.jpg?background=000000&cropX1=0&cropX2=4401&cropY1=0&cropY2=4401' }} style={{ width: 50, height: 50}} />
                </View>
              </Left>
              <Body>
              <Text>Mark Zuckerberg</Text>
              <Text note>20 minutes ago</Text>
              </Body>
            </ListItem>
            <ListItem avatar>
              <Left>
                <View style={{borderRadius:50, borderColor: "#075E54", borderWidth: 2.5, padding: 1.5}}>
                  <Thumbnail source={{ uri: 'https://images.wsj.net/im-105325?width=620&size=1.5' }} style={{ width: 50, height: 50}} />
                </View>
              </Left>
              <Body>
              <Text>Bill Gates</Text>
              <Text note>30 minutes ago</Text>
              </Body>
            </ListItem>
            <ListItem avatar>
              <Left>
                <View style={{borderRadius:50, borderColor: "#075E54", borderWidth: 2.5, padding: 1.5}}>
                  <Thumbnail source={{ uri: 'https://static.businessinsider.sg/2019/03/03/5b748ea80ce5f519008b55fa.png' }} style={{ width: 50, height: 50}} />
                </View>
              </Left>
              <Body>
              <Text>Larry Page</Text>
              <Text note>42 minutes ago</Text>
              </Body>
            </ListItem>
          </List>

          <List style={{marginBottom: 7}}>
            <ListItem itemDivider>
              <Text note style={{fontWeight: "bold"}}>Viewed Updates</Text>
            </ListItem>
            <ListItem avatar>
              <Left>
                <View style={{borderRadius:50, borderColor: "#dddddd", borderWidth: 2.5, padding: 1.5}}>
                  <Thumbnail source={{ uri: 'https://static.businessinsider.sg/2019/03/03/5b748ea80ce5f519008b55fa.png' }} style={{ width: 50, height: 50}} />
                </View>
              </Left>
              <Body>
              <Text>Larry Page</Text>
              <Text note>42 minutes ago</Text>
              </Body>
            </ListItem>
            <ListItem avatar>
              <Left>
                <View style={{borderRadius:50, borderColor: "#dddddd", borderWidth: 2.5, padding: 1.5}}>
                  <Thumbnail source={{ uri: 'https://images.wsj.net/im-105325?width=620&size=1.5' }} style={{ width: 50, height: 50}} />
                </View>
              </Left>
              <Body>
              <Text>Bill Gates</Text>
              <Text note>30 minutes ago</Text>
              </Body>
            </ListItem>
          </List>
        </Content>
        <View style={{flex: 0}}>
          <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#f4f4f4', marginBottom: 65, width: 47, height: 47 }}
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })}>
            <Icon name="create" style={{color: "#075E54"}} />
          </Fab>
          <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#25d366' }}
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })}>
            <Icon name="camera" />
          </Fab>
        </View>
      </Container>
    );
  }
}