import React, { Component } from 'react';
import './page.css'
import { Link } from 'react-router-dom'

class SeeDetails extends Component {
  render(){
    return <div className='container text-center'>
    <Link to='/'><button className='btn btn-sm   a1' >Home</button></Link>
    <Link to='/add-customer'><button className='btn btn-sm   a1'>Add Customer</button></Link>
    <Link to='/see-details'><button className='btn btn-sm   a1'>See Details</button></Link>
    <Link to='/update-customer'><button className='btn btn-sm   a1'>Update Customer</button></Link>
    <Link to='/delete-customer'><button className='btn btn-sm   a1'> Delete Customer</button></Link>

    <div>
    <h1>See Details</h1>
    </div>

    </div>
  }

}
export default SeeDetails;
