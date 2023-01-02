import React from 'react'
import ChildComponent from './ChildComponent'
import ParentComponent from './ParentComponent'

export const Task2 = () => {
  return (
    <div>
        <h2>Task2</h2>
        <b>Q2. Make a class component named ParentComponent and inside componentDidMount start a timer that console.log a name every 2 seconds. Inside this ParentComponent there is a child functional component called ChildComponent. We don't want to render ChildComponent every time the ParentComponent renders. How will you do this?</b>
        <ParentComponent/>
    </div>
  )
}
