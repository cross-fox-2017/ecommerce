let Items = require('../models/items')

module.exports = {
  getItems: (req, res) => {
    Items.find().then(function (data) {
      res.send(data)
    }).catch(function (err) {
      res.json(err)
    })
  },
  getItem: (req, res) => {
    Items.find({itemid: req.params.itemid}).then(function (data) {
      res.send(data)
    }).catch(function (err) {
      res.json(err)
    })
  },
  createItem: (req, res) => {
    Items.create({
      name: req.body.name,
      itemid: req.body.itemid,
      category: req.body.category,
      stock: req.body.stock,
      price: req.body.price
    }).then(function (data) {
      res.json(data)
    }).catch(function (err) {
      res.json(err)
    })
  },
  deleteItem: (req, res) => {
    Items.findOneAndRemove({itemid: req.params.itemid}).then(function (data) {
      res.send(`Deleted Item with ItemID: ${req.params.itemid}`)
    }).catch(function (err) {
      res.json(err)
    })
  },
  updateItem: (req, res) => {
    Items.findOneAndUpdate({itemid: req.params.itemid}, req.body, {new: true}).then(function (data) {
      res.json(data)
    }).catch(function (err) {
      res.json(err)
    })
  },
  checkout: (req, res) => {
    let carts = JSON.parse(req.body.carts)
    for (let i = 0; i < carts.length; i++) {
      Items.findOneAndUpdate({
        _id: carts[i].id
      }, {$set: {stock: (carts[i].stock) - (carts[i].qty)}}).then(function (data) {
        res.json(data)
      }).catch(function (err) {
        res.json(err)
      })
    }
  }
}
