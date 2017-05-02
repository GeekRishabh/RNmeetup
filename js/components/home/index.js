import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions, ActionConst } from 'react-native-router-flux';
import { Container, Header, Title, Content, Text, Button, Icon, Left, Body, Right, Row } from 'native-base';

import styles from './styles';


class Home extends Component {

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent >
              <Icon active name="menu" />
            </Button>
          </Left>

          <Body>
            <Title>DEMO</Title>
          </Body>

          
          <Right />
        </Header>

        <Content>
          
              <Row>
                <TouchableOpacity
                  style={styles.row}
                  onPress={() => Actions.permission()} >
                  <Text style={styles.text}>Permission Test</Text>
                </TouchableOpacity>
              </Row>

              <Row>
                <TouchableOpacity
                  style={styles.row}
                  onPress={() => Actions.facebook()} >
                  <Text style={styles.text}>Facebook Login</Text>
                </TouchableOpacity>
              </Row>

              <Row>
                <TouchableOpacity
                  style={styles.row}
                  onPress={() => Actions.glogin()} >
                  <Text style={styles.text}>Google Login</Text>
                </TouchableOpacity>
              </Row>

              <Row>
                <TouchableOpacity
                  style={styles.row}
                  onPress={() =>Actions.constant() } >
                  <Text style={styles.text}>Constant Test</Text>
                </TouchableOpacity>
              </Row>

              <Row>
                <TouchableOpacity
                  style={styles.row}
                  onPress={() => Actions.location()} >
                  <Text style={styles.text}>Get Location</Text>
                </TouchableOpacity>
              </Row>

              <Row>
                <TouchableOpacity
                  style={styles.row}
                  onPress={() => Actions.imagePicker()} >
                  <Text style={styles.text}>Image Picker</Text>
                </TouchableOpacity>
              </Row>

              <Row>
                <TouchableOpacity
                  style={styles.row}
                  onPress={() => Actions.sensor()} >
                  <Text style={styles.text}>Sensor Test</Text>
                </TouchableOpacity>
              </Row>
               <Row>
                <TouchableOpacity
                  style={styles.row}
                  onPress={() => Actions.contact()} >
                  <Text style={styles.text}>Get Contact</Text>
                </TouchableOpacity>
              </Row>
               <Row>
                <TouchableOpacity
                  style={styles.row}
                  onPress={() => Actions.snapshot()} >
                  <Text style={styles.text}>Get Snapshot</Text>
                </TouchableOpacity>
              </Row>

               <Row>
                <TouchableOpacity
                  style={styles.row}
                  onPress={() => Actions.snapshot()} >
                  <Text style={styles.text}>Stay Awake</Text>
                </TouchableOpacity>
              </Row>

               <Row>
                <TouchableOpacity
                  style={styles.row}
                  onPress={() => Actions.snapshot()} >
                  <Text style={styles.text}>Get Snapshot</Text>
                </TouchableOpacity>
              </Row>
           
         
        </Content>
      </Container>
    );
  }
}

export default connect()(Home);
