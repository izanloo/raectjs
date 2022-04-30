import React,{useState} from 'react'
import Taost from './Taost'

let index=1;
export default function Show() {

    const [messages,setMassages] = useState([])
    const add = ()=>{
        const id = Date.now();
        setMassages([...messages,{desc: "sample " + index++,id},]);
        setTimeout(() => {
            setMassages((currentMessages) => {
                const targetIndex = currentMessages.findIndex((i) => i.id === id);
                const newMessages = [...currentMessages];
                newMessages.splice(targetIndex, 1);
                return newMessages;
            });
        }, 1000);
    }
  
 
    return (
      <div>
        <Taost  messages={messages} >
          This is some text
        </Taost>
        <button className='btnShow' onClick={add} >
          Show Toast
        </button>
      
</div>
    );
  };
