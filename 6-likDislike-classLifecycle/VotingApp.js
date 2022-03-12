import React, { Component } from 'react';

class Votingapp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            framwork: []
        }
    }

    componentDidMount() {
        fetch('./framwork.json')
        .then(res => res.json())
        .then(data => this.setState({framwork: 
            data.map(data => {
                return {...data, like :0, disLike:0}
            })}))
    }

    likeHandler = (id, flag) => {
        let framwork2 = this.state.framwork
        let item = framwork2.find(obj => obj.id === id)
        flag === 1 ? item.like += 1 : item.disLike += 1
        this.setState({framwork: framwork2})
    }

    render() {
        return (
            <div className='framworks'>
                {this.state.framwork.map(obj => {
                    return (
                        <div key={obj.id} className='framwork'>
                            <div>{obj.title}</div>
                            <div className='btns'>
                            <button onClick={()=>this.likeHandler(obj.id, 1)} className='like-dis'><span>{obj.like}</span>
                                Like
                            </button>
                            <button onClick={()=>this.likeHandler(obj.id, -1)} className='like-dis'><span>{obj.disLike}</span>
                                disLike
                            </button>
                            </div>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default Votingapp;
