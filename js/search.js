var inSearch = document.querySelector('#search');
var user = document.querySelectorAll("#user");
var form = document.querySelectorAll("#form-user");
inSearch.addEventListener("input", function () {
    for (var i = 0; i < user.length; i++) {
        txtValue = inSearch.value.toUpperCase();
        console.log(txtValue);
        console.log(user[i].innerHTML.toUpperCase());
        if (((user[i].innerHTML.toUpperCase().indexOf(txtValue) > -1))) {
            form[i].style.display = "";
        }
        else {
            form[i].style.display = "none";
        }
    }
})