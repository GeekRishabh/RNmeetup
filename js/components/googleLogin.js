import * as Expo from 'expo';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Alert,
    Dimensions,
    StatusBarIOS,
} from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';
import { Container, Header, Title, Content, Button, Left, Right, Body, Icon, Separator } from 'native-base';
import React, { Component } from 'react';
const { width, height } = Dimensions.get('window');


export default class Glogin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Component: null,
        };
    }
    render() {
    async function googleLogin() {
        console.log('call');
        try {
            console.log('try');
            const result = await Expo.Google.logInAsync({
                androidClientId: 678772593940-b93pi5lr8lvu31re4honpe1sgfgkuk5r.apps.googleusercontent.com,
                iosClientId: 678772593940-gqklgirnhog8kojnplvqo1k7fpr1vr5c.apps.googleusercontent.com,
                scopes: ['profile', 'email'],
            });
            console.log('result', result);
            // if (result.type === 'success') {
            //     return result.accessToken;
            // } else {
            //     return { cancelled: true };
            // }
        } catch (e) {
            console.log('error', e);
            return { error: true };
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
                        <Title> Google </Title>
                    </Body>
                    <Right />
                </Header>
                <Content style={{marginTop: height/2 -50}}> 
                <Button block info onPress={() =>googleLogin() }>
                  <Text> Sign In with Google </Text> 
                </Button>
                </Content>
                   
            </Container>
           
        );
    }
}