import * as Expo from 'expo';
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Alert,
    Dimensions,
    StatusBarIOS,
} from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';
import { Container, Header, Title, Content, Button, Left, Right, Body, Icon, Separator, Text } from 'native-base';
const { width, height } = Dimensions.get('window');

export default class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Component: null,
        };
    }

    render() {
      async function getContact() {
        const contacts = await Expo.Contacts.getContactsAsync([
          Expo.Contacts.PHONE_NUMBERS,
          Expo.Contacts.EMAILS,
        ]);
        if (contacts.length > 0) {
          Alert.alert(
            'Your first contact is...',
            `Name: ${contacts[0].name}\n` +
            `Phone: ${JSON.stringify(contacts[0].phoneNumbers)}\n` +
            `Email: ${JSON.stringify(contacts[0].emails)}`
          );
        }
      }
        return ( 
             <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title> Contact </Title>
                    </Body>
                    <Right />
                </Header>
                <Content style={{marginTop: height/2 -50}}> 
                <Button block info onPress={() =>getContact() }>
                  <Text> Fetch Contact </Text> 
                </Button>
                </Content>
                   
            </Container>
        );    
      }
    }