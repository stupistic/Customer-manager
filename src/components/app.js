import React from 'react';
import { Link } from 'react-router-dom'

const App =  () => {
  return <div className='container text-center'>
      <Link to='/'><button className='btn btn-sm   a1' >Home</button></Link>
      <Link to='/add-customer'><button className='btn btn-sm b  a1' >Add Customer</button></Link>
      <Link to='/see-details'><button  className='btn btn-sm   a1' >See Details</button></Link>
      <Link to='/update-customer'><button className='btn btn-sm   a1' >Update Customer</button></Link>
      <Link to='/delete-customer'><button className='btn btn-sm   a1' > Delete Customer</button></Link>

      <div>
      <h1 className='f1  '>Home</h1>
      <h2>Welcome to Customer Manager </h2>
      </div>

         </div>
}
export default App;
