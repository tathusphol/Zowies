setTimeout(() => {
    let requestURL1 = '/json/search.json';
    let request1 = new XMLHttpRequest();
    request1.onreadystatechange = function () {
        if (request1.readyState == 4 && request1.status == 200) {
            dataReportStatus(JSON.parse(request1.responseText));
        }
    };
    request1.open("GET", requestURL1, true);
    request1.send();

    function dataReportStatus(data) {
        for (let i = 0; i < data.length; i++) {
            var searchparent = document.getElementById('parentsearch');
            var boxsearch = document.createElement('div');
            var searchtext = document.createElement('p');
            var searchimg = document.createElement('img');
            var searchprice = document.createElement('p');
            searchimg.src = data[i].font;
            searchtext.innerHTML = data[i].name;
            searchprice.innerHTML = data[i].price;
            boxsearch.appendChild(searchimg);
            boxsearch.appendChild(searchtext);
            boxsearch.appendChild(searchprice);
            boxsearch.setAttribute('class', 'space-y-3 text-black');
            boxsearch.setAttribute('style', 'display: none;');
            boxsearch.setAttribute('id', 'itemsearch');
            searchtext.setAttribute('id', 'itemname');
            searchparent.appendChild(boxsearch);
        }
    }
}, 300);