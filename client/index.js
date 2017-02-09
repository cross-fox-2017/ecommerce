$(document).ready(function () {
  showItems()
})

function showItems () {
  $.ajax({
    type: 'GET',
    url: 'http://localhost:3000/items',
    success: function (resp) {
      for (let i = 0; i < resp.length; i++) {
        let item = resp[i]
        $('.row.item-box').append(
          `<div id="to_be_refreshed" class="column container col-md-3 col-sm-3 col-xs-4">
            <div class="thumbnail">
              <img src="https://humblebundle.imgix.net/misc/files/hashed/abc813c4bdfb5d7d8a5230d0b38704bc095c2bda.jpg?auto=format&fit=crop&h=353&w=616&ixlib=python-0.2.0&s=106f23ea7dd929849a4f1d0a34f69043" alt="image">
              <div style="padding: 5px;min-height:150px;">
                <span id="item-${i + 1}-id" name="item_id" value="${item._id}"><b style="color:#009999;">Item Id:</b> ${item.itemid}</span>
                </br>
                <span id="item-${i + 1}-name" name="item_name" value="${item.name}">${item.name}</span>
                </br>
                <span id="item-${i + 1}-category" name="item_category" value="${item.category}"><b style="color:#009999;">Category:</b> ${item.category}</span>
                </br>
                <span id="item-${i + 1}-stock" name="item_stock" value="${item.stock}"><b style="color:#009999;">Stock:</b> ${item.stock}</span>
                </br>
                <span id="item-${i + 1}-price" name="item_price" value="${item.price}"><b style="color:#009999;">Price:</b> ${item.price}</span>
                </br>
              </div>
              <div style="text-align:center;padding-bottom:5px;">
                <button id="add-item-${i + 1}" type="submit" class="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>`
        )
      }
      addToCart(resp)
    },
    error: function () {
      console.log('Back End Response Error')
    }
  })

  function addToCart (resp) {
    for (let i = 0; i < resp.length; i++) {
      $(`#add-item-${i + 1}`).click(function () {
        getDetails(i)
      })
    }
  }

  function getDetails (i) {
    // assign item information to a new object called itemInfo
    let itemInfo = {}
    if (localStorage.getItem(`cart-${i + 1}`)) { // if cart-${i+1} not null
      let getCart = localStorage.getItem(`cart-${i + 1}`)
      let newQty = (JSON.parse(getCart).qty) + 1
      let price = Number(($(`#item-${i + 1}-price`).attr('value')).replace(/\$/g, ''))
      let newPrice = price * newQty
      itemInfo = {
        id: $(`#item-${i + 1}-id`).attr('value'),
        name: $(`#item-${i + 1}-name`).attr('value'),
        price: `$${newPrice}`,
        stock: $(`#item-${i + 1}-stock`).attr('value'),
        qty: newQty
      }
      localStorage.setItem(`cart-${i + 1}`, JSON.stringify(itemInfo))
    } else {
      itemInfo = {
        id: $(`#item-${i + 1}-id`).attr('value'),
        name: $(`#item-${i + 1}-name`).attr('value'),
        price: $(`#item-${i + 1}-price`).attr('value'),
        stock: $(`#item-${i + 1}-stock`).attr('value'),
        qty: 1
      }
      localStorage.setItem(`cart-${i + 1}`, JSON.stringify(itemInfo))
    }
    appendToTableCart(i)
  }

  function appendToTableCart (i) {
    let subTotal = []
    let total = 0
    $(`#cart`).empty()
    for (let j in localStorage) {
      let item = JSON.parse(localStorage[j])
      let price = Number((item.price).replace(/\$/g, ''))
      subTotal.push(item.qty * price)
      $('#cart').append(
        `<tr>
            <td>${item.name}</td>
            <td>${item.qty}</td>
            <td>${item.price}</td>
        </tr>`
      )
    }
    for (let i = 0; i < subTotal.length; i++) {
      total += subTotal[i]
    }
    $('#cart').append(
      `<tr>
          <td>Total:</td>
          <td></td>
          <td>$${total}</td>
      </tr>`
    )
  }

  $('#checkout').submit(function (e) {
    e.preventDefault()
    let carts = []
    let item = {}
    for (let j in localStorage) {
      item = JSON.parse(localStorage[j])
      carts.push(item)
    }
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/item/checkout',
      data: {carts: JSON.stringify(carts)},
      dataType: 'json' // untuk tipe data dari data yg dilempar dari DB
    })
    .done(function (resp) {
      $(`#cart`).empty()
      localStorage.clear()
      location.reload()
    })
  })
}
