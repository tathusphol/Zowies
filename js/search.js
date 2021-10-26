inputsearch.addEventListener("input", function () {
    var inputsearch = document.getElementById('inputsearch');
    var itemsearch = document.querySelectorAll("#itemsearch");
    var text = document.querySelectorAll("#itemname");
    for (var i = 0; i < text.length; i++) {
        let value = inputsearch.value.toLowerCase();
        if(text[i].innerHTML.toLowerCase().indexOf(value) == 0){
            itemsearch[i].style.display = "none";
        }
        else if (((text[i].innerHTML.toLowerCase().indexOf(value) > -1))) {
            itemsearch[i].style.display = "";
            itemsearch[i].classList.add('animatesearch');
        }
        else {
            itemsearch[i].style.display = "none";
            itemsearch[i].classList.remove('animatesearch');
        }
    }
})
