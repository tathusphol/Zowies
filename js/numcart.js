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
var check = 1;
document.getElementById('button').onclick = function () {
    document.getElementById("sidebar").classList.toggle("animate-open");
    document.getElementById("sidebar").classList.toggle("right-0");
    document.getElementById("sidebar").classList.toggle("hidebar");
    document.body.classList.toggle('overflow-hidden');
    document.getElementById('bg-sidebar').classList.toggle('hidden');
    if (check % 2 == 0) {
        document.getElementById("sidebar").classList.toggle("animate-close");
    }
    check += 1;
}
document.getElementById('button1').onclick = function () {
    document.getElementById("sidebar").classList.toggle("animate-open");
    document.getElementById("sidebar").classList.toggle("right-0");
    document.getElementById("sidebar").classList.toggle("hidebar");
    document.body.classList.toggle('overflow-hidden');
    setTimeout(() => {
        document.getElementById('bg-sidebar').classList.toggle('hidden');
    }, 200);
    if (check % 2 != 0) {
        document.getElementById("sidebar").classList.toggle("animate-close");
    }
    check += 1;
}