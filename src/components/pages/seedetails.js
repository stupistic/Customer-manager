import React, { Component } from 'react';
import './page.css'
import { Link } from 'react-router-dom'

class SeeDetails extends Component {

state = {
   data: []
}

componentDidMount(){
  const seedetails = "http://localhost:5000/seeDetails"
  fetch("https://customanager.herokuapp.com/seeDetails").then(res => {
            if (res.ok) {
              return res.json();
            } else {
              throw Error(res.statusText);
            }
          })
          .then(json => this.setState({ data: json }))
      .catch( err => console.log(err))




}

SeeDetails = () => {
const Data = this.state.data.map((customer) => {
    return <>
    <tr>
      <td>{customer._id}</td>
      <td>{customer.name}</td>
      <td>{customer.ph}</td>
      <td>{customer.address}</td>
      <td>{customer.verified}</td>
    </tr>
    </>
})
return Data;
}


  render(){
    return <div className='container text-center'>
    <Link to='/'><button className='btn btn-sm   a1' >Home</button></Link>
    <Link to='/add-customer'><button className='btn btn-sm   a1'>Add Customer</button></Link>
    <Link to='/see-details'><button className='btn btn-sm   a1' >See Details</button></Link>
    <Link to='/update-customer'><button className='btn btn-sm   a1'>Update Customer</button></Link>
    <Link to='/delete-customer'><button className='btn btn-sm   a1'> Delete Customer</button></Link>

    <div className='container'>
    <h1 className='f1   '>See Details</h1>
    <table>
      <tr>
        <th>Customer ID</th>
        <th>Customer Name</th>
        <th>Phone Number</th>
        <th>Address</th>
        <th>Verified</th>
      </tr>
      {this.SeeDetails()}
    </table>

    </div>
    </div>
  }

}
export default SeeDetails;
