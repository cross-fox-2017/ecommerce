function getItems(){
  $.ajax({
    url: "http://localhost:3000/api/item/all",
    type: "GET",
    success: function(results) {
      results.forEach(function(data){
        $('#items').append(`
        <div id = "${data._id}" class="col s12 m3 l3">
          <div class="card">
            <div class="card-image">
              <img src="${data.picture}">
              <span class="card-title">${data.name}</span>
              <a class="btn-floating halfway-fab waves-effect waves-light green on" onclick="addToCart('${data._id}','${data.picture}','${data.name}','${data.price}')"><i class="material-icons">add_shopping_cart</i></a>
            </div>
            <div class="card-content">
              <p>Harga: ${data.price}</p>
              <p id="stock">Stock: ${data.quantity}</p>
            </div>
          </div>
        </div>`)
      })
    }
  })
}

function addToCart(id,pic,name,price) {
  let item;
  if(localStorage.getItem(id)){
    let barang = JSON.parse(localStorage.getItem(id))
    barang.qty ++
    item = {
      "id": "cart"+id,
      "pic": pic,
      "name": name,
      "price": price,
      "qty": barang.qty,
      "total": barang.qty * price
    }
    localStorage.setItem(id, JSON.stringify(item))
    $(`#${item.id}`).html(`
        <div class="card">
          <div class="card-image">
            <img src="${item.pic}">
            <span class="card-title">${item.name}</span>
          </div>
          <div class="card-content">
            <p>Harga: ${item.total}</p>
            <p>Qty: ${item.qty}</p>
          </div>
        </div>`)
  }else {
    item = {
      "id": "cart"+id,
      "pic": pic,
      "name": name,
      "price": price,
      "qty": 1,
      "total": price
    }
    localStorage.setItem(id, JSON.stringify(item))
    $('#carts').append(`
      <div id=${item.id} class="col s12">
        <div class="card">
          <div class="card-image">
            <img src="${item.pic}">
            <span class="card-title">${item.name}</span>
          </div>
          <div class="card-content">
            <p>Harga: ${item.total}</p>
            <p id="qty">Qty: ${item.qty}</p>
          </div>
        </div>
      </div>`)
  }
  $('#nav').append(`<li><a onclick="checkout(${item.id},${item.qty})"><i class="material-icons">exit_to_app</i></a></li>`)
  $('#nav-mobile').append(`<li><a onclick="checkout(${item.id},${item.qty})"><i class="material-icons">exit_to_app</i>Checkout</a></li>`)
}

function checkout(id,qty) {
  let qty = JSON.parse(localStorage.getItem(id)).qty
  $.ajax({
    url: "http://localhost:3000/api/item/update",
    type: "PUT",
    data: {
      quantity: qty,
      updatedAt: new Date()
    },
    success: function(results) {
      $('#cart').empty()
      $('#items').empty()
      getItems()
    }
  })
}
