$(document).ready(function(){
  listAllItem()
})
function addToCart(item){
  let qty = 1
  if(localStorage.getItem(item)){
    prevQty = localStorage.getItem(item)
    newQty = Number(prevQty) + 1
    localStorage.setItem(item, newQty)
  } else {
    localStorage.setItem(item, qty);
  }
}
function listAllItem(){
  $.ajax({
    type: 'GET',
    url: 'http://localhost:3000/api/items',
    success: function(data){
      data.forEach(function(item){
        $('#itemlist').append(
          `<div class="col-xs-4">
            <div class="thumbnail">
              <label style="text-align:center">${item.name}</label>
              <img src=${item.picture}>
              <p>Stock: ${item.stock}</p>
              <p>Price: ${item.price}</p>
              <button type="button" name="button" class="btn btn-success cartlist" id="${item.name}">Add to Cart</button>
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
function addlistener(){
  $('#itemlist').on('click', '.btn.cartlist', function(){
    addToCart(this.id)
    alert('Added To Cart '+this.id);
  })
}
