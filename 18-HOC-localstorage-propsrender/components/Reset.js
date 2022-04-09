import React,{useState} from 'react'

export default function Reset({load,save}) {
    const[name,setName]=useState({
        lastusername:"",
        newpassword:""
    })
    const update=()=>{
       const lastPass=load('pass')
       if(lastPass==name.lastpassword){
           save('pass',name.newpassword)
       }
    }
    const handleChange=(e)=>{
        const value=e.target.value;
         setName({...name,[e.target.name]:value})
       }
  return (
    <div>
     <p>reset</p>
     <input type='password' name="lastpassword" placeholder='lastpassword' onChange={handleChange}/>
     <input type="password" name="newpassword" placeholder="newpass.." onChange={handleChange}/>
     <button type="submit" onClick={update}>reset</button>
    </div>
  )
}
