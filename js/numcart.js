let itemjson = JSON.parse(localStorage.getItem(`datacart`));
if (itemjson == null) {

}
else {
    var numitem = 0;
    for (var i = 0; i < itemjson.length; i++) {
        if (itemjson[i] == null) {
            continue;
        }
        numitem += parseInt(itemjson[i].numitem);
    }
}
if (numitem == undefined) {
    var numcart = document.getElementById('numcart').innerHTML = 0;
}
else {
    var numcart = document.getElementById('numcart').innerHTML = numitem;
}