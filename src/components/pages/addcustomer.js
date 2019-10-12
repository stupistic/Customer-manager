import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './page.css'

class AddCustomer extends Component {
  render(){
    return <div className='container text-center'>
    <Link to='/'><button className='btn btn-sm   a1' >Home</button></Link>
    <Link to='/add-customer'><button className='btn btn-sm   a1'>Add Customer</button></Link>
    <Link to='/see-details'><button className='btn btn-sm   a1'>See Details</button></Link>
    <Link to='/update-customer'><button className='btn btn-sm   a1'>Update Customer</button></Link>
    <Link to='/delete-customer'><button className='btn btn-sm   a1'> Delete Customer</button></Link>

    <div>
    <h1>Add Customer</h1>
          <div className='container'>

           <div>
            <label className='a2'>Customer name</label>
            <input />
           </div>

           <div>
            <label className='a2'>Phone Number</label>
            <input />
           </div>

           <div>
            <label className='a2'>Address</label>
            <input />
           </div>

      <button className='btn-sm a3'>Submit</button>
          </div>
    </div>
    </div>
  }

}
export default AddCustomer;
