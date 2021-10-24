function plus(num){
    var listitem = JSON.parse(localStorage.getItem(`data`));
    let number = listitem[num].numitem;
    number++;
    // localStorage.setItem(`numitem${num}`, number);
    var check = [];
    for(var i = 0 ; i < listitem.length ; i++){
        if(i == num){
            listitem[i].numitem = number;
            check.push(listitem[i]);
        }
        else{
            check.push(listitem[i]);
        }
        localStorage.setItem(`data`, JSON.stringify(check));
    }
    location.reload();
}
function minus(num){
    var listitem = JSON.parse(localStorage.getItem(`data`));
    let number = listitem[num].numitem;
    number--;
    // localStorage.setItem(`numitem${num}`, number);
    var check = [];
    for(var i = 0 ; i < listitem.length ; i++){
        if(i == num){
            listitem[i].numitem = number;
            check.push(listitem[i]);
        }
        else{
            check.push(listitem[i]);
        }
        localStorage.setItem(`data`, JSON.stringify(check));
    }
    location.reload();
}