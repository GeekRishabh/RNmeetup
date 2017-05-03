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
import { Actions, ActionConst } from 'react-native-router-flux';
import { Container, Header, Title, Content, Button, Left, Right, Body, Icon, Separator, Text } from 'native-base';

const { width, height } = Dimensions.get('window');

export default class Location extends Component {
    async componentWillMount() {
    const token = await Expo.Permissions.LOCATION();
    console.log('location permission', token)
  }
   render() {
      function getLocation () {
           Expo.Location.getCurrentPositionAsync({enableHighAccuracy: true})
            .then((result) => console.log(result.coords.latitude,result.coords.longitude))
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
                        <Title> Location </Title>
                    </Body>
                    <Right />
                </Header>
                <Content style={{marginTop: height/2 -50}}>	
                <Button block info onPress={() =>getLocation() }>
                  <Text> Get Current location </Text> 
                </Button>
                </Content>
                   
            </Container>
           
        );
        
    }
}