import { render } from '@testing-library/react';
import React, { useState } from 'react'

export default function Login({save,load,remove}) {
    console.log(save);
   const[name,setName]=useState({
       username:"",
       password:""
   })
   const handleChange=(e)=>{
    const value=e.target.value;
     setName({...name,[e.target.name]:value})
   }
 
  return (
        <>
        <p>login</p> 
        <input type='text' name="username" placeholder='username' onChange={handleChange}/>
        <input type="password" name="password" placeholder="pass.." onChange={handleChange}/>
        <button type="submit" onClick={()=>{save('username',name.username);save('pass',name.password)}}>login</button>
        </>

  )
}
