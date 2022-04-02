mport './App.css';

import Card from './Card';

function App() {

 const handleClick=()=>{
console.log("hello")
  }
  return (
    <div className="App">
     <Card title="foo" price={2} handleClick={handleClick}/> 
     
    </div>
  );
}

export default App;