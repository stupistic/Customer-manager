import React, { Component } from 'react';
import './page.css'
import { Link } from 'react-router-dom'

class DeleteCustomer extends Component {

  state = {
    CustomerID: ''
  }

  deleteCustomer = (e) => {
    e.preventDefault()
    fetch(`https://customanager.herokuapp.com/deleteCustomer/${this.state.CustomerID}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }).then(res => {
          if (res.ok) {
            return res.json();
          } else {
            throw Error(res.statusText);
          }
        })
        .then(json =>  console.log(json))
    .catch( err => console.log(err))
  }

  render(){
    return <div className='container text-center'>
    <Link to='/'><button className='btn btn-sm   a1' >Home</button></Link>
    <Link to='/add-customer'><button className='btn btn-sm   a1'>Add Customer</button></Link>
    <Link to='/see-details'><button className='btn btn-sm   a1'>See Details</button></Link>
    <Link to='/update-customer'><button className='btn btn-sm   a1'>Update Customer</button></Link>
    <Link to='/delete-customer'><button className='btn btn-sm   a1'> Delete Customer</button></Link>

    <div>
    <h1 className='f1   '>Delete Customer</h1>
    </div>

    <div className='container'>

     <div>
      <label className='a1'>Customer ID</label>
      <input className='c1' type='text' placeholder='Enter Customer ID' onChange = { e => this.setState({ CustomerID: e.target.value })} value={this.state.CustomerID} />
     </div>

  <button className='btn-sm btn-danger a4' onClick={ this.deleteCustomer }>Delete</button>
    </div>


    </div>
  }

}
export default DeleteCustomer;
