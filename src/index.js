import 'aframe';
import 'aframe-gridhelper-component';
import 'aframe-animation-component';
import 'aframe-alongpath-component';
import 'aframe-curve-component';
import 'babel-polyfill';

import {Entity, Scene} from 'aframe-react';
import Sphere from './Sphere';

import React from 'react';
import ReactDOM from 'react-dom';

const R = 10
const scale = 2
const angleSteps = [0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225]
const heights = [-10, -8, -6, -4, -2, 0, 2, 4, 6, 8, 10]

let balls = []

angleSteps.forEach((angle) => {
  heights.forEach((h) => {
    balls.push({x: R*Math.cos(angle), y: h, z: R*Math.sin(angle)})
  })
})


class App extends React.Component {
  
  render () {
    return (
      <Scene inspector="url: https://aframe.io/releases/0.3.0/aframe-inspector.min.js">
        <Entity id="one" position="0 0 0" rotation="0 0 0">
          <a-animation attribute="rotation"
            easing="linear"
            dur="10000"
            fill="forwards"
            to="0 360 0"
            repeat="indefinite"></a-animation>
            
            <a-animation attribute="scale"
            direction="alternate-reverse"
            easing="ease-cubic"
            dur="10000"
            to="0.6 0.6 0.6"
            repeat="indefinite"></a-animation>
            
          { 
            balls.map(pos => (
              <Sphere position={pos} color="#88CCB7" />
            ))
          }
        </Entity>       
        <Entity id="two" position="0 0 0" rotation="0 30 0">
          <a-animation attribute="scale"
              begin="6000"
              direction="alternate-reverse"
              easing="ease-cubic"
              dur="10000"
              to="0.6 0.6 0.6"
              repeat="indefinite"></a-animation>
          {
            balls.map(pos => (
              <Sphere position={pos} color="#FFF6DD" />
            ))
          }
        </Entity>
        <Entity id="three" position="0 0 0" rotation="0 60 0">
          <a-animation attribute="rotation"
            easing="linear"
            dur="14000"
            fill="forwards"
            to="0 360 0"
            repeat="indefinite"></a-animation>
            
            <a-animation attribute="scale"
            begin="3000"
            direction="alternate-reverse"
            easing="ease-cubic"
            dur="10000"
            to="0.6 0.6 0.6"
            repeat="indefinite"></a-animation>
          {
            balls.map(pos => (
              <Sphere position={pos} color="#F6C4FF" />
            ))
          }
        </Entity>

        
        <Entity primitive="a-sky" color="#d3fcff" />
        
        <Entity rotation="0 0 0">
          <a-animation attribute="rotation"
            easing='linear'
            dur="6000"
            fill="forwards"
            to="0 360 0"
            repeat="indefinite"></a-animation>
          <Entity primitive="a-camera" position="0 0 0" />
        </Entity>
        
        <Entity primitive="a-light" type="ambient" intensity="1" />
      </Scene>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#sceneContainer'));
