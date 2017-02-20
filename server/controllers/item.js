const model = require('../models/item')
const trans = require('../models/trans')

module.exports = {
  getAll: function (req, res) {
    model.find().then(function (data) {
      res.json({success: data})
    }).catch(function (err) {
      res.json({err: err})
    })
  },

  create: function (req, res) {
    let input = {
      itemId: req.body.itemid,
      qty: 0,
      status: 0
    }
    trans.create(input).then(function (data) {
      if (data)
        trans.find({status: 0}).then(function (data) {
          res.json({success: data})
        }).catch(function (err) {
          res.json({err: err})
        })
    }).catch(function (err) {
      res.json({err: err})
    })
  },
  getAllcart: function (req, res) {
    trans.find({'status': 0}).populate('itemId').then(function (data) {
      res.json({success: data})
    }).catch(function (err) {
      res.json({err: err})
    })
  },

  checkout: function (req, res) {
    let objid_cart = req.body.objid_cart
    let objid_item = req.body.objid_item

    let qty = req.body.qty

    for (let i = 0;i < objid_cart.length;i++) {
      trans.update({'_id': objid_cart[i]}, {'$set': {'qty': qty[i],'status': 1  }}, function (err, data) {
        if (err) console.log(err)
        if (data)
          model.findOne({'_id': objid_item[i]}, function (err, data) {
            if (err) console.log(err)
            let result = data.stock - qty[i]
            data.stock = result
            data.save(function (err) {
              if (err)
                console.log(err)
              res.json({success: 'success'})
            })
          })
      })
    }
  }

}
