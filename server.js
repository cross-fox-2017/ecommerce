const express = require('express')
const app = express()
const router = express.Router()
const trans = require('./controller/usertransactions.controller')
const item = require('./controller/items.controller')
const cors = require('cors')
const bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/',router)
app.listen(3000)

router.post('/transaksi',trans.create)
router.put('/checkout',trans.checkout)
router.get('/items',item.show)
router.get('/showcart/:cus',trans.show)
