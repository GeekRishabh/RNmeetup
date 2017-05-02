import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Alert,
    Dimensions,
    StatusBarIOS,
} from 'react-native';
import * as Expo from 'expo';
import { Actions, ActionConst } from 'react-native-router-flux';import { Container, Header, Title, Content, Button, Left, Right, Body, Icon, Separator, Text } from 'native-base';


const { width, height } = Dimensions.get('window');

export default class Facebook extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Component: null,
        };
    }
   render() {
    async function facebookLogin() {
      console.log('in login function');
      const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(
        '1580645588617791', {
        permissions: ['public_profile'],
      });
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}`);
        Alert.alert(
          'Logged in!',
          `Hi ${(await response.json()).name}!`,
        );
      }
    }

        return ( 
             <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => Actions.pop()}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title> Facebook </Title>
                    </Body>
                    <Right />
                </Header>
                <Content style={{marginTop: height/2 -50}}>	
                <Button block info onPress={() =>facebookLogin() }>
                  <Text> Sign In with Facebook </Text> 
                </Button>
                </Content>
                   
            </Container>
           
        );
        
    }
}