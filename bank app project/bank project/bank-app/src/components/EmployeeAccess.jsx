import React from 'react'
import { Link } from 'react-router-dom'
import Nav1 from './Nav1'
const EmployeeAccess = () => {
  return (
   <div>
    <Nav1/>
     <div className='container mt-5'>
       <Link to='/addEmployee'><input type='submit' className='btn btn-success mx-5' value={'Add-New-customer'} />  </Link>
       <Link to='/showCustomer'><input type='submit' className='btn btn-secondary' value={'Existing-customer'}/>  </Link>
    </div>
   </div>
  )
}

export default EmployeeAccess