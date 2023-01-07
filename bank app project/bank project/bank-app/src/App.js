import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Customer from './components/Customer';
import Employee from './components/Employee';
import EmployeeAccess from './components/EmployeeAccess';
import AddEmployee from './components/AddEmployee';
import ShowCustomer from './components/ShowCustomer';
import MyAccount from './components/MyAccount';
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Footer from './components/Footer';
function App() {
  return (
    <div>
      <BrowserRouter>
        
        <Routes>
          <Route path='/customer' element={<Customer />} />
          <Route path='/employee' element={<Employee />} />
          <Route path='/employeeAccess' element={<EmployeeAccess />} />
          <Route path='/addEmployee' element={<AddEmployee />} />
          <Route path='/showCustomer' element={<ShowCustomer />} />
          <Route path='/myAccount' element={<MyAccount />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service />} />

          
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>

  );
}

export default App;
