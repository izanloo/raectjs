import React,{useState} from 'react';


function App(){
let [values,setValues]=useState({
    firstname:'',
    lastname:'',
    email:'',
    phone:''
})
  const [resData,setResdata]=useState({

  })
  function  handelChange(e){
     const value=e.target.value;
     setValues({...values,[e.target.name]:value})
     
    }
    function handelSubmit(e){
        e.preventDefault();
        localStorage.setItem('value', JSON.stringify(values));
        console.log(values);
    }
    return(
        <>
        <form onSubmit={handelSubmit}>
            firstname<input type="text" name='firstname' onChange={handelChange}  />
            lastname<input type="text" name='lastname' onChange={handelChange} />
            email<input type="email" name='email'onChange={handelChange} />
            phone<input type="phone" name='phone'onChange={handelChange} />
            <button type='submit'>save</button>
            <button type='button'>clear</button>
        </form>
        
        </>
    )
}
export default App