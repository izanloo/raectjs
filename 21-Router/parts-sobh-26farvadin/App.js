import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Contact from './copmonents/Contact';
import Invoice from './copmonents/Invoice';
import Home from './copmonents/Home';
import { Invoicedetails } from './copmonents/Invoicedetails';
function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home/>}>
      <Route path="/contact" element={<Contact/>}/>
<Route path="/invoice" element={<Invoice/>}>
  <Route path=':number' element={<Invoicedetails/>}/>
</Route>

<Route
path="*"
element={
  <main style={{padding:"1rem"}}>
  <p>ther is nothing</p>
  </main>
}
/>
</Route>
    </Routes>
    </div>
  );
}

export default App;
