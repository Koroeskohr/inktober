import React from "react"
import {Entity} from 'aframe-react';

function Bird (props) {
    const path = props.path
    
    return (
      <Entity 
      primitive="a-cone" 
      color="white"
      radius-bottom="0.2" 
      radius-top="0.02" 
      alongpath={`curve: #${path}; rotate: true; dur: 600`} />
    )
}

export default Bird