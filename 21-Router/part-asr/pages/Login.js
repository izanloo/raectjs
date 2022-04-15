import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserProvider'
import { Navigate, useNavigate } from 'react-router-dom';

export default function Login() {
  const { user, setUser } = useContext(UserContext);
  const [value, setValue] = useState({})
  const [isSubmit,setIsSubmit] = useState(false)
  const navigate = useNavigate()
  function setinfo(e) {
    setValue({...value,[e.target.name]:e.target.value})


  }
  function handelSubmit(){
    setUser(value)
    setIsSubmit(true)
    return navigate('/invoice/invoicedetails', {replace:true})
      // if (isSubmit){
        // return <Navigate to="/invoice/invoicedetails" replace={true} />
      // }
  }


  return (
    <>
    <form>
      <input type='email' name='email' onChange={setinfo} />
      <input type='password' name='password' onChange={setinfo} />
      <button onClick={handelSubmit}>login</button>

    </form>
        </>
  )
}
