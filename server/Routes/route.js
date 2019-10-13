
const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);

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

app.put('/updateCustomer/:_id', async (req,res) => {
  const updatedCustomer = await customer.findByIdAndUpdate(req.params._id, {
      verified: req.body.verified
    }, { new: true });
  res.send(updatedCustomer);


})

app.delete('/deleteCustomer/:_id', async (req,res) => {
const removedCustomer = await customer.findByIdAndRemove(req.params._id)

res.send(removedCustomer)
})

}
