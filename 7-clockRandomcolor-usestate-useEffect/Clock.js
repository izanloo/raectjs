import React,{useState,useEffect} from 'react';
import randomColor from "randomcolor";

export default function Clock() {
    let [time,setTime] = useState(new Date())
    let [color,setColor] = useState(randomColor())
    function timer() {
        const intervalId = setInterval(()=>{
            setTime(new Date())
        },1000)
        return (() => clearInterval(intervalId))
    }
    function colors() {
        setInterval(()=>{
            setColor(randomColor())
        },1000)
    }
    useEffect(timer,[])
    useEffect(colors,[])
    return(
        <h1 style={{color}}>{time.toLocaleTimeString()}</h1>
    )
}


