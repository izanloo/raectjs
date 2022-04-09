import React from 'react';
import './App.css';

import Form from './components/Form';

function App() {
  return (
    <div className="App">
  	<Form
    //inisional value
      data={{
        email: "",
        password: "",
      }}
      // onChange={(newData) =>{
      //   alert(JSON.stringify(newData))
      // }}
    />
    </div>
  );
}

export default App;









// function App(){
// const [values,setValues]=useState({
//     firstname:'',
//     lastname:'',
//     email:'',
//     phone:''
// })

//   function  handelChane(e){
//      const value=e.target.value;
//      setValues({...values,[e.target.name]:value})
     
//     }
//     function handelSubmit(e){
//         e.preventDefault();
//         localStorage.setItem('value',JSON.stringify(values))
//         console.log(values)
//     }
//     return(
//         <>
//         <form onSubmit={handelSubmit}>
//             firstname<input type="text" name='firstname' onChange={handelChane} />
//             lastname<input type="text" name='lastname' onChange={handelChane} />
//             email<input type="email" name='email' onChange={handelChane} />
//             phone<input type="phone" name='phone'onChange={handelChane}  />
//             <button type='button' >save</button>
//             <button type='button'>clear</button>
//         </form>

//         </>
//     )
// }
// export default App