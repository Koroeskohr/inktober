import 'aframe';
import 'aframe-gridhelper-component';
import 'aframe-animation-component';
import 'aframe-alongpath-component';
import 'aframe-curve-component';
import 'babel-polyfill';

import {Entity, Scene} from 'aframe-react';
import BirdManager from './BirdManager';

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render () {
    return (
      <Scene antialias="true" inspector="url: https://aframe.io/releases/0.3.0/aframe-inspector.min.js">
        <a-assets>

        </a-assets>
        
        <BirdManager interval="500" />

        <Entity primitive="a-sky" color="black" />

        <Entity primitive="a-camera" position="0 -5 0" rotation="90 90 0">
          <Entity primitive="a-light" 
          type="point"
          color="#FFFFFF"
          intensity="1000"
          distance="10"/>
        </Entity>
      </Scene>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#sceneContainer'));
