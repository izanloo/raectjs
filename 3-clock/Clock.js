import React from 'react'
class Clock extends React.Component{
    constructor(props){
        super(props)
        this.state={
            time: new Date()
        }
    }
    setTime=()=>{
        this.setState(state:{
            time:new Date()
        })
    }
    componentDidMount(){
        this.interval=setInterval(callback:()=>setTime(),ms:1000)
    }
    componentWillUnmount(){
        this.interval.clearInterval()
    }
    render(){
        return(
            <div>{this.state.time.toLocaleDateString()}
            </div>
        )
    }
}
export default Clock