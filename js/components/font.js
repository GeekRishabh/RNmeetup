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

export default class Font extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Component: null,
        };
    }

    render() {
      function loadFont(){
        Expo.Font.loadAsync({
          title: 'http://url/to/font1.ttf',
          cursive: 'http://url/to/font2.ttf',
        });
      }
        return ( 
            <Container >
                <Header >
                    <Left >
                        <Button transparent onPress={() => Actions.pop()} >
                            <Icon name = 'back' / >
                         </Button> 
                     </Left > 
                	<Body>
                    	<Title > Fonts </Title> 
              	    </Body > <Right/>
                </Header>
            	<Content>
               		<Button block info onPress={() =>loadFont() }>
           				<Text> Load Font </Text> 
           			</Button> 
            	</Content>

           </Container>);
        }
    }