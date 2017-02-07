# mongodb-crud

mongodb-crud is a back end application about liblary ( API )

# API

| ROUTER                    | HTTP   | DESCRIPTION
| -----------------------   |:-----: | ---------------------------------
| /api/books                | GET    | Get all books
| /api/books/:isbn          | GET    | Get one book
| /api/books                | POST   | Create a books
| /api/books/:isbn          | DELETE | Delete a book
| /api/books/:isbn          | PUT    | Update a book with new info
| /api/customers            | GET    | Get all customers
| /api/customers/:memberid  | GET    | Get one customers
| /api/customers            | POST   | Create a customers
| /api/customers/:memberid  | DELETE | Delete a customers
| /api/customers/:memberid  | PUT    | Update a customers with new info
| /api/transactions            | GET    | Get all transactions
| /api/transactions/:transactionID  | GET    | Get one transaction
| /api/transactions            | POST   | Create a transaction

# Database Setup

```
1. fisrt you need to create database with name "library" before you use this app
```

# Usage
```
1. npm install
2. npm start
3. use the app using postman
```

# data dummy
```
document books Ex :
[{
  isbn: '978-1-60309-057-5',
  title: 'Dragon Puncher',
  author: 'James',
  category: 'All Ages',
  stock: 3
},{
  isbn: '978-1-60309-057-6',
  title: 'Dragon Knight',
  author: 'Alexander',
  category: '+18',
  stock: 1
}]

document customer Ex :
[{
  name: 'Septian Adhi Tama "Tamvan"',
  memberid: 'CL0002',
  address: 'Jalan Masjid Al Yaqin, Gg. Menur, No 80',
  zipcode: "13520",
  phone: "085695434151"
},
{
  name: 'yoni',
  memberid: 'CL0003',
  address: 'Jl. Pim 2',
  zipcode: "50023",
  phone: "083806781189"
}]

document transactions Ex :
{

}
```
