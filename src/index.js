import 'aframe';
import 'aframe-gridhelper-component';
import 'aframe-animation-component';
import 'aframe-alongpath-component';
import 'aframe-curve-component';
import 'babel-polyfill';

import {Entity, Scene} from 'aframe-react';

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render () {
    return (
      <Scene gridhelper="colorGrid: #00FF00" antialias="true" inspector="url: https://aframe.io/releases/0.3.0/aframe-inspector.min.js">
        <a-assets>

        </a-assets>
        


        <Entity primitive="a-sky" color="black" />

        <Entity primitive="a-camera" position="0 -5 0"  />
      </Scene>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#sceneContainer'));
