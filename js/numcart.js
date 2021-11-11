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
document.getElementById('button2').onclick = function () {
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
console.log(document.getElementById('numheart').innerHTML);
document.getElementById('numcart1').innerHTML = document.getElementById('numcart').innerHTML;
setTimeout(() => {
    document.getElementById('numheart1').innerHTML = document.getElementById('numheart').innerHTML;
}, 500);
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    console.log(prevScrollpos);
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > 100) {
        document.getElementById("nav2").classList.remove('hidden');
        document.getElementById("nav2").classList.add('animatesearchopen');
    } else {
        document.getElementById("nav2").classList.add('hidden');
        document.getElementById("nav2").classList.remove('animatesearchopen');
    }
    if (prevScrollpos > 300) {
        document.getElementById("scrollup").classList.remove('hidden');
        document.getElementById("scrollup").classList.add('animate');
    } else {
        document.getElementById("scrollup").classList.add('hidden');
        document.getElementById("scrollup").classList.remove('animate');
    }
    prevScrollpos = currentScrollPos;
}