function count_add_to_chart(title){
  var itemCount = Number($('#countItem').val())
  itemCount = itemCount + 1;
  $('#countItem').val(itemCount)
  localStorage.setItem("title", title);
}
