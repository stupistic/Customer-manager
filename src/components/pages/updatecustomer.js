import React, { Component } from 'react';
import './page.css'
import { Link } from 'react-router-dom'

class UpdateCustomer extends Component {

 state = {
  CustomerID: null,
  Verified: ''

}

updateCustomer = (e) => {
  e.preventDefault()
  const updatecustomer = `http://localhost:5000/updateCustomer/${this.state.CustomerID}`
  fetch(`https://customanager.herokuapp.com/updateCustomer/${this.state.CustomerID}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
     "verified": this.state.Verified
      })
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
    <Link to='/update-customer'><button  className='btn btn-sm   a1'>Update Customer</button></Link>
    <Link to='/delete-customer'><button className='btn btn-sm   a1'> Delete Customer</button></Link>

    <div>
    <h1 className='f1'>Update Customer</h1>
    </div>

    <div className='container'>

     <div>
      <label className='a1'>Customer ID</label>
      <input  className='c1 text-center' type='text' placeholder='Enter Customer ID' onChange = { e => this.setState({ CustomerID: e.target.value })} value={this.state.CustomerID}/>
     </div>

     <div>
      <label className='a1'>Verified Status</label>
      <input  className='c1 text-center' type='text' placeholder='Enter True/False' onChange = { e => this.setState({ Verified: e.target.value })} value={this.state.Verified}/>
     </div>

  <button className='btn-sm btn-success a5' onClick = {this.updateCustomer}>Submit</button>
    </div>

    </div>
  }
}
export default UpdateCustomer;
