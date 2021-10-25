var check = JSON.parse(localStorage.getItem(`data`));
var numwishlist = 0;
if(check == null){

}
else{
    for (var j = 0; j < check.length; j++) {
        if (check[j] == null) {
            continue;
    
        }
        else {
            numwishlist++;
        }
    }
}
if (numwishlist == undefined) {
    var numheart = document.getElementById('numheart').innerHTML = 0;
}
else {
    var numheart = document.getElementById('numheart').innerHTML = numwishlist;
}