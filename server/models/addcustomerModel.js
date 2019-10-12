const mongoose = require('mongoose')

const AddCustomerSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  ph: Number,
  address: String,
  verified: false
})
mongoose.model('AddCustomer',AddCustomerSchema)
