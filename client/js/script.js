$( document ).ready(function() {
  getItems();
});
function getItems(){
  $.ajax({
    url: "http://localhost:3000/item",
    type: "GET",
    success: function(results) {
      console.log(results);
      results.forEach(function(data){
        $('#items').append(`
          <div id="${data.id}" class="col-sm-6 col-md-4">
            <div class="thumbnail">
              <img src="${data.picture}" alt="sony">
              <div class="caption">
                <h3>${data.name}</h3>
                <p>Harga: ${data.price}</p>
                <p id="stock">Stock: ${data.quantity}</p>
                <p><a href="#" class="btn btn-default" role="button" onclick="addToCart('${data._id}','${data.picture}','${data.name}','${data.price}')">Add to Cart</a></p>
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
        <div class="thumbnail">
        <div id="${item.id}">
          <img src="${item.picture}">
          <div class="caption">
            <h3>${item.name}</h3>
            <p>Total: ${item.total}</p>
            <p id="stock">Stock: ${item.qty}</p>
          </div>
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
      <div id="${item.id}">
        <div class="thumbnail">
          <img src="${item.picture}">
          <div class="caption">
            <h3>${item.name}</h3>
            <p>Total: ${item.total}</p>
            <p id="stock">Stock: ${item.qty}</p>
          </div>
        </div>
      </div>`)

      $('checkout').append(`<button><a onclick="checkout(${item.id})">Checkout</a></button>`)
  }

}
function checkout(id) {
  let qty = JSON.parse(localStorage.getItem(id)).qty
  $.ajax({
    url: "http://localhost:3000/item/update",
    type: "PUT",
    data: {
      quantity: qty,
      updatedAt: new Date()
    },
    success: function(results) {
      $('#carts').empty()
      $('#items').empty()
      getItems()
    }
  })
}
