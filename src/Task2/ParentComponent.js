import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export default class ParentComponent extends Component {
    componentDidMount(){
        setTimeout(() => console.log('Lucky'), 1000)
    }
  render() {
    return (
      <div>ParentComponent
        <ChildComponent/>
      </div>
      
    )
  }
}

