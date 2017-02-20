$(document).ready(function () {
  index()
  cart()
})

function index () {
  $.ajax({
    url: 'http://localhost:3000/items',
    type: 'GET',
    success: function (data) {
      data.success.forEach(function (item) {
        let table = ` <li>
           <div class="collapsible-header"><i class="material-icons">filter_drama</i>${item.name}</div>
           <div class="collapsible-body">
           <span>Price : ${item.price}</span></br>
           <span>Stock : ${item.stock}</span>
            <div style="float :right;">
              <a class="click waves-effect waves-light btn" onclick="addtoCart('${item._id}')">Purchase</a>
            </div>
           </div>
         </li>`

        $('#maincontent').append(table)
      })
    },
    error: function (err) {
      console.log(err)
    }
  })
}

function cart () {
  $.ajax({
    url: 'http://localhost:3000/cart',
    type: 'GET',
    success: function (data) {
      let totalprice = 0
      data.success.forEach(function (item) {
        totalprice += item.itemId.price
        let table = ` <div class="col s4">${item.itemId.name}</div>
        <div class="col s4">${item.itemId.price}</div>
        <div class="col s4">
          <input type="hidden" name="objid_cart" value="${item._id}">
          <input type="hidden" name="objid_item" value="${item.itemId._id}">
          <input type="text" name="qty" >
        </div>`

        $('#cartform').append(table)
      })
      $('#totalprice').html(totalprice)
    },
    error: function (err) {
      console.log(err)
    }
  })
}

$('#cartform').submit(function (e) {
  e.preventDefault()
  $.ajax({
    url: 'http://localhost:3000/checkout',
    type: 'POST',
    data: $(this).serialize(),
    dataType: 'json',
    success: function (data) {
      if (data.success) {
        alert('success checkout !')
      }
    },
    error: function (err) {
      console.log(err)
    }
  })
})

function addtoCart (value) {
  $.ajax({
    url: 'http://localhost:3000/cart',
    type: 'POST',
    data: {
      itemid: value
    },
    dataType: 'json',
    success: function (data) {
      if (data) {
        let table = `${data.success.length}`
        $('#cart #span').html(table)
      }
    },
    error: function (err) {
      console.log(err)
    }
  })
}
