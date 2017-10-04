import 'aframe';
import 'aframe-gridhelper-component';
import 'aframe-animation-component';
import 'aframe-alongpath-component';
import 'aframe-curve-component';
import './passthrough'

import 'babel-polyfill';

import {rand} from './utils'

import {Entity, Scene} from 'aframe-react';

import React from 'react';
import ReactDOM from 'react-dom';

function Bubble(props) {
  const x = props.x
  return (
    <a-sphere position={`${x} -1 -2`} scale="0.03 0.03 0.03" material="color: #3333CC;" >
      <a-animation 
        begin={props.delay.toString()}
        attribute="position"
        easing="ease-sine"
        dur="4000"
        to={`${x} 4 -2`}
        repeat="indefinite"></a-animation>
    </a-sphere>
  )
}



let xs = []

for (let i= -3; i<=3; i+=rand(0.2, 0.6)) {
  xs.push({x: i, delay: Math.round(rand(0, 4000))})
}

class App extends React.Component {
  render () {
    return (
      <Scene inspector="url: https://aframe.io/releases/0.3.0/aframe-inspector.min.js">
        <a-assets>
        </a-assets>
        {
          xs.map(x => 
            <Bubble x={x.x} delay={x.delay} />
          )
        }
        
        <Entity primitive="a-sky" color="black" />

        <Entity primitive="a-camera" position="0 0 0" >
          <a-passthrough width="16" height="12" position="0 0 -4"/>
          <a-plane position="1 0 -0.1" material="color: #6666CC; transparent: true; opacity: 0.7" scale="20 20 1" />
        </Entity>
      </Scene>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#sceneContainer'));
