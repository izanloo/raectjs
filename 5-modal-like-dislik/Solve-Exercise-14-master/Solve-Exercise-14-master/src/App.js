import React, { Component } from 'react';
import Modal from './components/Modal/Modal';
import './App.css'
import Votingapp from './components/VotingApp/VotingApp';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visiable : false
    }
  }

  VisiableHandler = () => {
    this.setState({visiable : !(this.state.visiable)})
  }

  render() {
    return (
      <div className='main'>
        <button className='modalBtn' onClick={this.VisiableHandler}>click</button>
        <Modal visiable ={this.state.visiable} closeHandler = {this.VisiableHandler}/>
        <Votingapp />
      </div>
    );
  }
}

export default App;
