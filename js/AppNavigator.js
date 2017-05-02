
import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { connect } from 'react-redux';

import { Router, Scene } from 'react-native-router-flux';


import Home from './components/home/';
import Audio from './components/audio';
import BarCode from './components/barCode';
import Contact from './components/contact';
import Facebook from './components/facebookLogin';
import Font from './components/font';
import Glogin from './components/googleLogin';
import ImagePicker from './components/imagePicker';
import Map from './components/mapView'; //left
import Permission from './components/permission';
import Sensor from './components/sensor';
import Snapshot from './components/snapShot';
import Location from './components/location';
import KeekAwake from './components/keepAwake';


const RouterWithRedux = connect()(Router);

class AppNavigator extends Component {
 
  render() {
    return (
        <RouterWithRedux>
          <Scene key="root">
            <Scene key="home" component={Home} hideNavBar initial />
            <Scene key="barCode" component={BarCode} />
            <Scene key="contact" component={Contact} />
            <Scene key="facebook" component={Facebook} />
            <Scene key="font" component={Font} />
            <Scene key="imagePicker" component={ImagePicker} />
            <Scene key="sensor" component={Sensor} />
            <Scene key="location" component={Location} />
            <Scene key="keekAwake" component={KeekAwake} />
            <Scene key="permission" component={Permission} />
            <Scene key="glogin" component={Glogin} />
            <Scene key="snapshot" component={Snapshot} />
          </Scene>
        </RouterWithRedux>
    );
  }
}


export default connect()(AppNavigator);
