function modify_qty(val, qnty, max) {
    var qty = document.getElementById(qnty).value;
    var new_qty = parseInt(qty,10) + val;

    if (new_qty < 0) {
        new_qty = 0;
    }
    //
    // if (new_qty < max) {
    //     new_qty = max;
    // }

    document.getElementById('qty').value = new_qty;
    return new_qty;
}
