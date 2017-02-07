$(document).ready(function(){
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
              <button type="button" name="button" class="btn btn-success" onclick="addToCart(${item})">Add to Cart</button>
            </div>
          </div>`
        )
      })
    },
    fail: function(err){
      console.log(err);
    }
  })
})
function addToCart(item){
  var dataToStore = JSON.stringify(item);
  localStorage.setItem('customer', dataToStore);
}
