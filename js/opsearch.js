var boxsearch = document.getElementById('search');
function opensearch(){
    boxsearch.classList.remove('hidden');
    boxsearch.classList.remove('animatesearchclose');
    boxsearch.classList.add('animatesearchopen');
}

function closesearch(){
    boxsearch.classList.add('animatesearchclose');
    boxsearch.classList.remove('animatesearchopen');
    setTimeout(() => {
        boxsearch.classList.add('hidden');
    }, 350);
}