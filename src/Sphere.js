import React from 'react'
import {Entity} from 'aframe-react'


export default function Sphere(props) {
    return (
        <Entity primitive="a-sphere" {...props} scale="1 1 1" >
           <a-animation attribute="scale"
             direction="alternate-reverse"
             easing="ease-sine"
             dur="1000"
             to="1.3 0.8 1.3"
             repeat="indefinite"></a-animation>
        </Entity>
    )
}