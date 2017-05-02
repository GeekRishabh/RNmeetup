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


export default class Permission extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Component: null,
            hasCameraPermission: null,
        };
    }

   render() {
    async function getLocationAsync() {
      const { status } = await Expo.Permissions.askAsync(Expo.Permissions.LOCATION);
       console.log('status of location permission', status);
      if (status === 'granted') {
        return (Alert.alert('Location Permission is granted'));
         //return Expo.Location.getCurrentPositionAsync({enableHighAccuracy: true});
      } else {
         throw new Error('Location permission not granted');
        }
    }
     async function getCameraAsync() {
      const { status } = await Expo.Permissions.askAsync(Expo.Permissions.CAMERA);
       console.log('status of camera permission', status);
      if (status === 'granted') {
         return (Alert.alert('camera Permission is granted'));
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
                <Title> Permission </Title>
              </Body>
                <Right />
              </Header>
                <Content style={{marginTop: height/2 -50}}>	
                  <Button block info onPress={() =>getLocationAsync() }>
                    <Text> Permission for Location </Text> 
                  </Button>
                  <Button block success onPress={() =>getCameraAsync()} style={{ marginTop: 10 }}>
                    <Text> Permission for Camera </Text> 
                  </Button>
               </Content>
                   
          </Container>
           
        );
        
    }
}