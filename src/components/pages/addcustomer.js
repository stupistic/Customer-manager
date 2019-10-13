import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './page.css'

class AddCustomer extends Component {

  state = {
    Id: null,
    CustomerName : '',
    PhoneNumber : null,
    Address: ''
  }

 AddCustomer = (e) => {
   e.preventDefault()

      fetch("https://customanager.herokuapp.com/addCustomer", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
          "_id":this.state.Id, "name": this.state.CustomerName, "ph": this.state.PhoneNumber, "address": this.state.Address
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
    <Link to='/update-customer'><button className='btn btn-sm   a1'>Update Customer</button></Link>
    <Link to='/delete-customer'><button className='btn btn-sm   a1'> Delete Customer</button></Link>

    <div>
    <h1 className='f1   '>Add Customer</h1>
          <div className='container'>

          <div>
           <label className='a1'>Id</label>
           <input  className='c1' type='text' placeholder='Enter Id' onChange = { e => this.setState({ Id: e.target.value })} value={this.state.Id} />
          </div>


           <div>
            <label className='a1'>Customer name</label>
            <input  className='c1' type='text' placeholder='Enter Customer Name' onChange = { e => this.setState({ CustomerName: e.target.value })} value={this.state.CustomerName} />
           </div>

           <div>
            <label className='a1'>Phone Number</label>
            <input   className='c1'  type='text' placeholder='Enter Phone Number' onChange = { e => this.setState({ PhoneNumber: e.target.value })} value={this.state.PhoneNumber} />
           </div>

           <div>
            <label className='a1'>Address</label>
            <input  className='c1' type='text' placeholder='Enter Address' onChange = { e => this.setState({ Address: e.target.value })} value={this.state.Address} />
           </div>

      <button className='btn-sm a3' onClick = {this.AddCustomer}>Submit</button>
          </div>
    </div>
    </div>
  }

}
export default AddCustomer;
