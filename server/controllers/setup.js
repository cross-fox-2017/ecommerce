const model = require('../models/item')

module.exports = {
  seed: function (req, res) {
    let newItem = [{
      name: 'Xiaomi',
      stock: 10,
      price: 1000000
    }, {
      name: 'Oppo',
      stock: 10,
      price: 1000000
    }, {
      name: 'HUAWEI',
      stock: 10,
      price: 1000000
    }]

    model.create(newItem).then(function (data) {
      res.json({data: data})
    }).catch(function (err) {
      res.json({err: err})
    })
  }

}
