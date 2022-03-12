import React, { Component } from 'react';

class Modal extends Component {

    render() {
        if (this.props.visiable) {
            return (
                <div className='modal'>
                    <h1>hello</h1>
                    <button className='modalBtn' onClick={this.props.closeHandler}>close</button>
                </div>
            );
        }
        return null
    }
}

export default Modal;
