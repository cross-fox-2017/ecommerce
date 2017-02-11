const Customer = require('../model/customer');

module.exports = {
  getAllCustomer:function(req,res,next){
    Customer.find({},function(err,customers){
      if(err)throw err
      res.json(customers)
    })
  },
  createNewCustomer:function(req,res,next){
    var newCustomer = new Customer({
      name:req.body.name,
      memberid:req.body.memberid,
      address:req.body.address,
      zipcode:req.body.zipcode,
      phone:req.body.phone
    })
    newCustomer.save(function(err,customer){
      if(err)throw err;
      res.json(customer)
    })
  },
  deleteCustomer:function(req,res,next){
    Customer.findOneAndRemove({memberid:req.body.memberid},function(err,data){
      if(err)throw err;
      res.json(data)
    })
  },
  updateCustomer:function(req,res,next){
    Customer.findOneAndUpdate({memberid:req.body.memberid},{name:req.body.name,address:req.body.address,
    zipcode:req.body.zipcode,phone:req.body.phone},function(err,data){
      if(err)throw err
      res.json(data)
    })
  }
} // end module export
