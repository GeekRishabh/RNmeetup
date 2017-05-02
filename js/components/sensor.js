import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Alert,
    Dimensions,
    StatusBarIOS,
    TouchableOpacity,
} from 'react-native';
import * as Expo from 'expo';
import { Actions, ActionConst } from 'react-native-router-flux';
import { Container, Header, Title, Content, Button, Left, Right, Body, Icon, Separator, Text } from 'native-base';

const { width, height } = Dimensions.get('window');


export default class Sensor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Component: null,
            accelerometerData: {},
            gyroscopeData: {},
        };
    }
 componentDidMount() {
    this._toggle();
    this._toggle1();

  }

  componentWillUnmount() {
    this._unsubscribe();
    this._unsubscribe1();
  }

  _toggle = () => {
    if (this._subscription) {
      this._unsubscribe();
    } else {
      this._subscribe();
    }
  }

  _slow = () => {
    Expo.Accelerometer.setUpdateInterval(1000);
    Expo.Gyroscope.setUpdateInterval(1000);
  }

  _fast = () => {
    Expo.Accelerometer.setUpdateInterval(16);
    Expo.Gyroscope.setUpdateInterval(16);
  }

  _subscribe = () => {
    this._subscription = Expo.Accelerometer.addListener((result) => {
      this.setState({accelerometerData: result});
    });
  }

  _unsubscribe = () => {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  }
   // gyroscope sensor
   _toggle1 = () => {
    if (this._subscription1) {
      this._unsubscribe1();
    } else {
      this._subscribe1();
    }
  }

  _slow1 = () => {
    Gyroscope.setUpdateInterval(1000);
  }

  _fast1 = () => {
    Gyroscope.setUpdateInterval(16);
  }

  _subscribe1 = () => {
    this._subscription1 = Expo.Gyroscope.addListener((result) => {
      this.setState({gyroscopeData: result});
    });
  }

  _unsubscribe1 = () => {
    this._subscription1 && this._subscription1.remove();
    this._subscription1 = null;
  }
   render() {
    let { x, y, z } = this.state.accelerometerData;
     let { x1, y1, z1 } = this.state.gyroscopeData;
    function round(n) {
      if (!n) {
        return 0;
      }
        return Math.floor(n * 100) / 100;
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
                <Title> Sensors </Title>
              </Body>
                <Right />
              </Header>
                <Content> 
                  <View style={styles.sensor}>
        <Text>Accelerometer Details:</Text>
        <Text>x: {round(x)} y: {round(y)} z: {round(z)}</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this._toggle} style={styles.button}>
            <Text>Toggle</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._slow} style={[styles.button, styles.middleButton]}>
            <Text>Slow</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._fast} style={styles.button}>
            <Text>Fast</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.sensor}>
        <Text>Gyroscope Details:</Text>
        <Text>x: {round(x)} y: {round(y)} z: {round(z)}</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this._toggle1} style={styles.button}>
            <Text>Toggle</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._slow1} style={[styles.button, styles.middleButton]}>
            <Text>Slow</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._fast1} style={styles.button}>
            <Text>Fast</Text>
          </TouchableOpacity>
        </View>
      </View>
               </Content>
                   
          </Container>
           
        );
        
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
    marginTop: 15,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    padding: 10,
  },
  middleButton: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#ccc',
  },
  sensor: {
    marginTop: 15,
    paddingHorizontal: 10,
  },
});