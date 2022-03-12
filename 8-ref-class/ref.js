import React, { Component } from 'react'

export default class Paragraph extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }
    clickP = () => {
        console.log(this.myRef.current)
    }
  render() {
    return (
      <p onClick={this.clickP} ref={this.myRef}>This is a Paragraph.</p>
    )
  }
}


