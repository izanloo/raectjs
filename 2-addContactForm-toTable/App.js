import React, { Component } from 'react'
import Formm from './Form'
import Table from './Table'
import { Button } from 'react-bootstrap';

class App extends Component {
   constructor(props){
     super(props)
     this.state={
       contacts:[]
     }
     this.handelContactsend=this.handelContactsend.bind(this)
   }
   handelContactsend(contactObj){
    this.setState({
      contacts:[...this.state.contacts,contactObj]
    })

   }
  render() {
    return (
      <div>
        <Formm addContact={this.handelContactsend} />
        <Table  contacts={this.state.contacts} />
      </div>
    )
  }
}
export default App