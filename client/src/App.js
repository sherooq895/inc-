import './App.css';
import React from 'react'
import Login from './Pages/user/Login'
import Signup from './Pages/user/Signup'
import Form from './Pages/user/Form'
import Navbar from './Pages/Admin/Navbar';
import AdminLogin from './Pages/Admin/Login'
import ApplicationTable from './Pages/Admin/ApplicationList'
import Recordlist from './Pages/Admin/Recordlist'

import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Pendinglist from './Pages/Admin/Pendinglist';
import Bookingslot from './Pages/Admin/Bookingslot';

function App() {
  return (
    <div>
<BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Login />}/>
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/form' element={<Form />} />
      </Routes>
      <Routes>
        <Route  exact path='/admin' element={<AdminLogin/>}/>
        <Route  exact path='/admin/dashboard' element={<Navbar />}/>
        <Route   path='/admin/ApplicationList' element={< ApplicationTable/>}/>
        <Route   path='/admin/PendingList' element={< Pendinglist/>}/>
        <Route   path='/admin/Recordlist' element={< Recordlist/>}/>
        <Route   path='/admin/Bookingslot' element={< Bookingslot/>}/>

      </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
