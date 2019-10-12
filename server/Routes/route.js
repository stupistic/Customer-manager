
const mongoose = require('mongoose');


const customer = mongoose.model('AddCustomer')
module.exports = (app) => {


app.post('/addCustomer' , async (req,res) => {

    const newCustomer = new customer({
      _id: req.body._id,
      name: req.body.name,
      ph: req.body.ph,
      address: req.body.address,
      verified: false
    })

  const result = await newCustomer.save()
   res.send(result)

})
app.get('/seeDetails', async (req,res) => {
  const allCustomer = await customer.find()
  res.send(allCustomer)
})

app.put('/updateCustomer', async (req,res) => {


})

app.delete('/deleteCustomer', async (req,res) => {
 
})

}
