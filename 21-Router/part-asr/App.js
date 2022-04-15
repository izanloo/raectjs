import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login';
import Invoice from './pages/Invoice';
import { UserProvider } from './context/UserProvider'
import Invoicedetails from './pages/Invoicedetails';

function App() {
  return (
    <UserProvider>

      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/invoice' element={<Invoice />} >
          <Route path=':invoicedetails' element={<Invoicedetails />} />
        </Route>
      </Routes>
    </UserProvider>

  );
}

export default App;
