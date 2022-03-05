import React, { Component } from 'react'
import { Button, Form, Col, Container } from 'react-bootstrap'
import Table from './Table'
export default class Formm extends Component {
    constructor(props) {
        super(props)
        this.state = {
           firstname: '',
           lastname: '',
           email: '',
           phone: ''
        

            // contacts:["razieh","iz"]
        }
        
        this.handelFirstname = this.handelFirstname.bind(this)
        this.handelLastname = this.handelLastname.bind(this)
        this.handelemail = this.handelemail.bind(this)
        this.handelphone = this.handelphone.bind(this)
        this.handelSubmit = this.handelSubmit.bind(this)
    }

    handelFirstname(event) {
        let value = event.target.value
        this.setState({
            firstname: value
        })
    }
    handelLastname(event) {
        let value = event.target.value
        this.setState({
            lastname: value
        })
    }
    handelLastname(event) {
        let value = event.target.value
        this.setState({
            lastname: value
        })
    }
    handelemail(event) {
        let value = event.target.value
        this.setState({
            email: value
        })
    }
    handelphone(event) {
        let value = event.target.value
        this.setState({
            phone: value
        })
    }
    handelSubmit(e) {
        e.preventDefault()
        this.props.addContact(this.state)
        console.log(this.state)
        
    }
    render() {
        return (
            <Container>
                <Form onSubmit={this.handelSubmit}>
                <Form.Group  className='mt-5'>
                    <Form.Label>firstname</Form.Label>
                    <Form.Control type="text" name='firstname' onChange={this.handelFirstname} ></Form.Control>
                    <Form.Label className='mt-2'>lastname</Form.Label>
                    <Form.Control type="text" name='lastname' name='lastname' onChange={this.handelLastname} ></Form.Control>
                    <Form.Label  className='mt-2'>email</Form.Label>
                    <Form.Control type="text" type='email' onChange={this.handelemail} ></Form.Control>
                    <Form.Label  className='mt-2'>phone</Form.Label>
                    <Form.Control type="text" type='number' onChange={this.handelphone} ></Form.Control>
                    <Button type='submit'   className='mt-3'>submit</Button>
                </Form.Group>
                </Form>
                {/* <Table contact={this.state.contacts}/> */}
            </Container>
        )
    }
}
