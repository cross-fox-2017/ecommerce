let Customers = require('../models/customers')
let Items = require('../models/items')
let Transactions = require('../models/transactions')
let faker = require('faker')

require('dotenv').config()
let mongoose = require('mongoose')
mongoose.connect(`${process.env.MONGODB_URI}`)

function seedCustomers () {
  Customers.create({
    name: faker.name.findName(),
    memberid: faker.random.number(),
    address: faker.address.streetAddress()
  })
}

seedCustomers()
