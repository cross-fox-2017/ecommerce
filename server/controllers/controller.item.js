const modelItem = require('../models/model.item')

var controllerItem = {
  /* create new book */
  createItem: function (req, res, next) {

    // create a new book
    var newItem = modelItem({
      itemName: req.body.itemName,
      description: req.body.description,
      price: req.body.price,
      stock: req.body.stock
    })

    // save the user
    newItem.save(function (err, data) {
      if (err) throw err
      res.json(data)
    })
  },
  /* get All Book */
  getAllItem: function (req, res, next) {
    modelItem.find({}, function (err, data) {
      res.json(data)
    })
  },
  /* find one book */
  getOneItem: function (req, res, next) {
    modelItem.find({isbn: req.params.itemid}, function (err, data) {
      res.json(data)
    })
  },
  /* edit book */
  editOneItem: function (req, res, next) {
    modelItem.findOneAndUpdate({ isbn: req.params.itemid}, {
      itemName: req.body.itemName,
      description: req.body.description,
      price: req.body.price,
      stock: req.body.stock
    }, {
      new: true
    }, function (err, data) {
      if (err) throw err
      // we have the updated book returned to us
      res.json(data)
    })
  },
  /* delete book */
  deleteOneItem: function (req, res, next) {
    modelItem.findOneAndRemove({ isbn: req.params.itemid }, function (err, data) {
      if (err) throw err
      res.json(data)
    })
  }
}

module.exports = controllerItem
