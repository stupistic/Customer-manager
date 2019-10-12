import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import AddCustomer from './components/pages/addcustomer'
import DeleteCustomer from './components/pages/deletecustomer'
import SeeDetails from './components/pages/seedetails'
import UpdateCustomer from './components/pages/updatecustomer'
import { BrowserRouter, Route } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
   <Route path='/' exact component={App}/>
   <Route path='/add-customer' component={AddCustomer}/>
   <Route path='/delete-customer' component={DeleteCustomer}/>
   <Route path='/see-details' component={SeeDetails}/>
   <Route path='/update-customer' component={UpdateCustomer}/>

  </BrowserRouter>,
   document.getElementById('root'));
