import React, { Component } from 'react'
import Todo from './TodoList'


class App extends Component {

  render() {
    return (
      <div>
        <Todo user={1}/>
      </div>
    )
  }
}
export default App