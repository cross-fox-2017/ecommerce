$(document).ready(function(){
  listAllItem()
})
function addToCart(item, price, id){
  let details = {name: item, id: id, price: price, qty: 1}
  if(localStorage.getItem(item)){
    let prev = localStorage.getItem(item)
    prev = JSON.parse(prev)
    prev.qty +=1;
    localStorage.setItem(item, JSON.stringify(prev))
  } else {
    localStorage.setItem(item, JSON.stringify(details));
  }
  // refreshCart()
}
function objCart() {
  let cart = []
  for (var item in localStorage) {
    cart.push({name: item, qty: localStorage[item]});
  }
  return cart.slice(0, localStorage.length)
}
function refreshCart() {
  let cart = objCart()
  $('#cartItem').empty()
  cart.forEach(function(item){
    $('#cartItem').append(
        `<tr>
          <td>${item.name}</td>
          <td>${item.qty}</td>
        </tr>`
    )
  })
}
function listAllItem(){
  $.ajax({
    type: 'GET',
    url: 'http://localhost:3000/api/items',
    success: function(data){
      data.forEach(function(item){
        $('#itemlist').append(
          `<div class="col-xs-4">
            <div class="thumbnail" style='text-align:center'>
              <label style="text-align:center">${item.name}</label>
              <img src=${item.picture}>
              <p>Stock: ${item.stock}</p>
              <p>Price: ${item.price}</p>
              <button type="button" name="button" class="btn btn-success cartlist" id="${item.name}">Add to Cart</button>
              <input type="hidden" id="price${item.name}" value="${item.price}">
              <input type="hidden" id="id${item.name}" value="${item._id}">
            </div>
          </div>`
        )
      })
    },
    fail: function(err){
      console.log(err);
    }
  }).done(function(){
    addlistener()
  })
}
function checkout() {
  let cart = objCart()
  $.ajax({
    type: 'POST',
    url: 'http://localhost:3000/api/checkout',
    data: {cartItem: cart},
    dataType: 'json',
    success: function(status) {
      $('#endCheckout').prepend(`<p>${status}</p>`)
    },
    fail: function(err){
      console.log(err);
    }
  })
}
function addlistener(){
  $('#itemlist').on('click', '.btn.cartlist', function(){
    let price = $(`#price${this.id}`).val()
    let id = $(`#id${this.id}`).val()
    addToCart(this.id, price, id)
    alert('Added To Cart '+this.id);
  })
  $('#mycart').on('click', '.btn.btn-success.btn-lg.checkout', function(){
    checkout()
    localStorage.clear();
    alert('Buy Items Success');
  })
}
