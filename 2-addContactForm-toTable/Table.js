import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
export default class Tablee extends Component {
  
  render() {
  //  const contactItemnode= this.props.contacts.map((names)=>{
  //     return <Formm key={namess}>{names}</Formm>
  //   })
    return (
      <div>
<Table striped bordered hover>
  <thead>
    <tr>
      <th>First Name</th>
      <th>Last Name</th>
      <th>mail</th>
      <th>phone</th>
    </tr>
  </thead>
  <tbody>
{  console.log(this.props.contacts)}
{    this.props.contacts.map((person,id)=>{
      return (<tr key={id}>
            <td>{person.firstname}</td>
            <td>{person.lastname}</td>
            <td>{person.email}</td>
            <td>{person.phone}</td>
      </tr>)
})
}    

  </tbody>
</Table>
      </div>
    )
  }
}
