import { Components }from 'expo';
import React from 'react';
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

export default class Map extends React.Component {
  static route = {
    navigationBar: {
      visible: false,
    },
  }
  componentWillMount(){
    console.log('in mapview');
  }

  render() {
    return (
      <Components.MapView
        style={{flex: 1}}
        initialRegion={{
          latitude: 12.78825,
          longitude: 77.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      
    );
  }
}