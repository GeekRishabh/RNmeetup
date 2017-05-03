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
import { Container, Header, Title, Content, Button, Left, Right, Body, Icon, Separator } from 'native-base';
import React, { Component } from 'react';
import { Actions, ActionConst } from 'react-native-router-flux';

const { width, height } = Dimensions.get('window');

export default class Constant extends Component {
 
    render() {
        async function getConstants() {
            const deviceId = Expo.Constants.deviceId;
            const deviceName =Expo.Constants.deviceName;
            const platform =Expo.Constants.platform;
            Alert.alert(deviceId);
        }
        return ( 
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => Actions.pop()} >
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title> Constant </Title>
                    </Body>
                    <Right />
                </Header>
                <Content style={{marginTop: height/2 -50}}> 
                <Button block info onPress={() =>getConstants() }>
                  <Text> Get Details </Text> 
                </Button>
                </Content>
                   
            </Container>
           
        );
        }
    }