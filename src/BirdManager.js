import React from 'react'

import {Entity} from 'aframe-react'
import Bird from './Bird'

import {uid} from './utils'

class BirdManager extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      birds: [],
    }
  }
  
  R_MIN = 10
  R_MAX = 15
  
  componentDidMount () {
    this.startSpawning()
  }
  
  rand(min, max) {
    return Math.random() * (max - min) + min;
  }
  
  randWithGap(min, max) {
    const val = Math.random() * (max - min) + min;
    
    return (val < 0 ? val - 1 : val + 1)
  }
    
  startSpawning () {
    setInterval(this.spawnBird.bind(this), this.props.interval)
  }
  
  spawnBird() {
    const pos = [this.rand(-1,1), this.rand(-1,1)]
    const randR = this.rand(this.R_MIN, this.R_MAX)
    const start = [pos[0] * randR, pos[1] * randR, this.rand(0, 5)]
    const mid = [this.randWithGap(-5,5), this.randWithGap(-5,5), this.rand(0, 5)]
    const end = [mid[0] - 3*start[0], mid[1] - 3*start[1], this.rand(0, 5)]
    
    
    const bird = {
      id: uid(),
      start: {x: start[0], y: start[2], z: start[1]},
      mid: {x: mid[0], y: mid[2], z: mid[1]},
      end: {x: end[0], y: end[2], z:- end[1]},
    }
    
    this.setState((prevState, props) => {
      const newBirds = [...prevState.birds, bird]
      return { birds: newBirds }
    })
  }
  
  addAutodestruction = (bird) => {
    bird.addEventListener('movingended', () => {
      this.setState((prevState, props) => ({
        birds: prevState.birds.filter(b => b.id !== bird.id)
      }))
    })
    
    setTimeout(() => {
      this.setState((prevState, props) => ({
        birds: prevState.birds.filter(b => b.id !== bird.id)
      }))
    }, 600)
  }
  
  render () {
    return (
      <Entity id='birds'>
        {
          this.state.birds.map(bird => (
            <Bird key={bird.id} path={bird.id} />
          ))
        }
        {
          this.state.birds.map(bird => (
            <Entity 
            _ref={this.addAutodestruction}
            primitive="a-curve" 
            id={bird.id} 
            key={bird.id} >
              <Entity primitive="a-curve-point" position={bird.start} />
              <Entity primitive="a-curve-point" position={bird.mid} />
              <Entity primitive="a-curve-point" position={bird.end} />
            </Entity>
          ))
        }
      </Entity>
    )
  }
}


export default BirdManager