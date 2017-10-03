/* global CANNON */
/* global AFRAME */

import 'aframe';
import 'aframe-gridhelper-component';
import 'aframe-animation-component'; 
import 'aframe-alongpath-component';
import 'aframe-curve-component';
import 'aframe-mouse-cursor-component';
import 'aframe-physics-system';

import 'babel-polyfill';

import {Entity, Scene} from 'aframe-react';

import React from 'react';
import ReactDOM from 'react-dom';

import {rand} from './utils'

import Leaf from './Leaf'

import leaf from './assets/leaf.png'
import ground from './assets/ground.jpg'

AFRAME.registerComponent('move-on-looked', {
  init: function () {
    var el = this.el

    this.el.addEventListener('mouseenter', function (evt) {
      this.body.applyImpulse(
        new CANNON.Vec3(0, 4, rand(-3, 3)),
        new CANNON.Vec3().copy(this.getAttribute('position'))
      );
    });
  }
});

class App extends React.Component {
  render () {
    let matrix = []
    for (let i= -10; i <= 10; i+=0.9) {
      for (let j= -10; j <=10; j += 1.5) {
        matrix.push({x: i+ rand(-0.15, 0.15), y: 3, z:j+ rand(-0.1, 0.1)})
      }
    }
    return (
      <Scene>
        <a-assets>
          <img src={leaf} id="leaf" />
          <img src={ground} id="ground" />
        </a-assets>
 
 
        {
          matrix.map(pos => (
            <Leaf move-on-looked bubbleRef={this.addLeaf} texture="leaf" position={pos} rotation="20 0 0" dynamic-body />
          ))
        }
        
        <a-plane material="src: #ground" static-body position="0 0 0" rotation="-90 0 0" scale="40 40 1" color="white"></a-plane>
        
        <Leaf texture="leaf" position="0 10 0" dynamic-body />

        <Entity primitive="a-sky" color="black" />
        
        <Entity rotation="-90 0 0" position="0 8 0">
          <Entity primitive="a-camera" mouse-cursor  rotation="0 0 0" wasd-controls="enabled: false" look-controls="enabled: false" />
        </Entity>
      </Scene>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#sceneContainer'));