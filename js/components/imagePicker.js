import * as Expo from 'expo';
import {
    AppRegistry,
    StyleSheet,
    Image,
    View,
    Alert,
    Dimensions,
    StatusBarIOS,
} from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';
import { Container, Header, Title, Content, Button, Left, Right, Body, Icon, Separator,  Text } from 'native-base';
import React, { Component } from 'react';
const { width, height } = Dimensions.get('window');

export default class ImagePicker extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Component: null,
            image: null,
        };
    }
    render() {
       let { image } = this.state;
       pickImage = async () => {
          let result = await Expo.ImagePicker.launchImageLibraryAsync({
              allowsEditing: true,
              aspect: [4,3]
          });
          console.log(result);
          if (!result.cancelled) {
              this.setState({image: result.uri});
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
                        <Title> Image Picker </Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                <View style={{marginTop: height/2 -50}}> 
                <Button block info onPress={() =>pickImage() }>
                  <Text> Pick Image </Text> 
                </Button>

                </View>
                </Content>
                <View style={{alignItems: 'center'}} >
                 {image &&
                     <Image source={{uri: image}} style={{width: width, height: 250, alignItems: 'center'}} /> }
                 </View>
               
                   
            </Container>
           
        );
      }
}