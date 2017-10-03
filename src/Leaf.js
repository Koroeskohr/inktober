/* global CANNON */

import React from 'react'
import {Entity} from 'aframe-react';


class Leaf extends React.Component {
  render () {
    const material = `src: #${this.props.texture}; side: double;`
    return (
      <Entity class="leaf" primitive="a-plane" material={material} transparent="true" {...this.props} />
    )  
  }
  
}

export default Leaf