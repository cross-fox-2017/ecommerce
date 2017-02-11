const Book = require('../model/book');
const multer = require('multer')


module.exports = {
/*show all data book*/
getAllBook:function(req,res,next){
  Book.find({},function(err,books){
    if(err)throw err;
    res.json(books)
  })
},
/*create new book*/
createNewBook:function(req,res,next){
  var imageName = req.files[0].originalname
  var newBook = new Book({
    isbn: req.body.isbn,
    title:req.body.title,
    author: req.body.author,
    category: req.body.category,
    image:imageName,
    price: req.body.price,
    stock: req.body.stock,
    description: req.body.description
  })
  newBook.save(function(err,books){
    if(err)throw err
  res.redirect('http://127.0.0.1:8080/item.html')
  })
},
/*delete book*/
deleteBook:function(req,res,next){
  Book.findOneAndRemove({isbn:req.body.isbn},function(err, books){
    if(err)throw err
    res.json(books)
  })
},

updateBook:function(req,res,next){
  Book.findOneAndUpdate({isbn:req.body.isbn},
  {title:req.body.title,
  author:req.body.author,
  category:req.body.category,
  image:req.body.image,
  price: req.body.price,
  stock:req.body.stock,
  description:req.body.description},function(err,books){
  if(err)throw err
  res.json(books)
  })
}
}
