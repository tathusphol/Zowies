var dict = {
    "sale": "sale.json",
    "accessory": "accessory.json",
    "Mobiuz": "Mobiuz.json",
    "kaidee": "kaidee.json",
    "mouse": "mouse.json",
    "mouse_pad": "mouse_pad.json",
    "XL_Monitor": "XL_Monitor.json",
    "Two": "Two_hand.json",
    "onsale": "kaidee.json",
    "new": "kaidee.json"
};
var checknumcart = 1;
function pickcart(name, numberid) {
    numberidcart = numberid;
    if (name == "onsale") {
        numberidcart = numberid +9
    }
    else if (name == "new") {
        numberidcart = numberid+13
    }
    // localStorage.removeItem();
    let requestURL = `/json/${dict[name]}`;
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            dataReportStatus(JSON.parse(request.responseText));
        }
    };
    request.open("GET", requestURL, true);
    request.send();

    function dataReportStatus(data) {
        if (dict[name] == 'kaidee.json') {
            if (name == "onsale") {
                if (JSON.parse(localStorage.getItem(`datacart`)) == null) {
                    document.getElementById('numcart1').innerHTML = parseInt(document.getElementById('numcart1').innerHTML)+checknumcart;
                    document.getElementById('numcart').innerHTML = parseInt(document.getElementById('numcart').innerHTML)+checknumcart;
                    document.getElementById(`pickcart${numberidcart}`).innerHTML = "ดูตะกร้าสินค้า";
                    var listcheck = [];
                    var listitem = { id: data.onsale[numberid - 1].font, name: data.onsale[numberid - 1].name, price: data.onsale[numberid - 1].price, priceint: data.onsale[numberid - 1].priceint, numitem: 1 };
                    listcheck.push(listitem);
                    localStorage.setItem(`datacart`, JSON.stringify(listcheck));
                }
                else {
                    var check = 1;
                    var listcheck = JSON.parse(localStorage.getItem(`datacart`));
                    for (var i = 0; i < listcheck.length; i++) {
                        if (listcheck[i] == null) {
                            continue;
                        }
                        if (data.onsale[numberid - 1].font == listcheck[i].id) {
                            check = 0;
                            window.location.href = 'cart.html';
                            break;
                        }
                    }
                    if (check) {
                        document.getElementById('numcart1').innerHTML = parseInt(document.getElementById('numcart1').innerHTML)+checknumcart;
                        document.getElementById('numcart').innerHTML = parseInt(document.getElementById('numcart').innerHTML)+checknumcart;
                        document.getElementById(`pickcart${numberidcart}`).innerHTML = "ดูตะกร้าสินค้า";
                        console.log(numberidcart);
                        var listitem = { id: data.onsale[numberid - 1].font, name: data.onsale[numberid - 1].name, price: data.onsale[numberid - 1].price, priceint: data.onsale[numberid - 1].priceint, numitem: 1 };
                        listcheck.push(listitem);
                        localStorage.setItem(`datacart`, JSON.stringify(listcheck));
                    }

                }
            }
            else if (name == "new") {
                if (JSON.parse(localStorage.getItem(`datacart`)) == null) {
                    document.getElementById('numcart1').innerHTML = parseInt(document.getElementById('numcart1').innerHTML)+checknumcart;
                    document.getElementById('numcart').innerHTML = parseInt(document.getElementById('numcart').innerHTML)+checknumcart;
                    document.getElementById(`pickcart${numberidcart}`).innerHTML = "ดูตะกร้าสินค้า";
                    var listcheck = [];
                    var listitem = { id: data.new[numberid - 1].font, name: data.new[numberid - 1].name, price: data.new[numberid - 1].price, priceint: data.new[numberid - 1].priceint, numitem: 1 };
                    listcheck.push(listitem);
                    localStorage.setItem(`datacart`, JSON.stringify(listcheck));
                }
                else {
                    var check = 1;
                    var listcheck = JSON.parse(localStorage.getItem(`datacart`));
                    for (var i = 0; i < listcheck.length; i++) {
                        if (listcheck[i] == null) {
                            continue;
                        }
                        if (data.new[numberid - 1].font == listcheck[i].id) {
                            check = 0;
                            window.location.href = 'cart.html';
                            break;
                        }
                    }
                    if (check) {
                        document.getElementById('numcart1').innerHTML = parseInt(document.getElementById('numcart1').innerHTML)+checknumcart;
                        document.getElementById('numcart').innerHTML = parseInt(document.getElementById('numcart').innerHTML)+checknumcart;
                        document.getElementById(`pickcart${numberidcart}`).innerHTML = "ดูตะกร้าสินค้า";
                        var listitem = { id: data.new[numberid - 1].font, name: data.new[numberid - 1].name, price: data.new[numberid - 1].price, priceint: data.new[numberid - 1].priceint, numitem: 1 };
                        listcheck.push(listitem);
                        localStorage.setItem(`datacart`, JSON.stringify(listcheck));
                    }

                }
            }
            else {
                if (JSON.parse(localStorage.getItem(`datacart`)) == null) {
                    document.getElementById('numcart1').innerHTML = parseInt(document.getElementById('numcart1').innerHTML)+checknumcart;
                    document.getElementById('numcart').innerHTML = parseInt(document.getElementById('numcart').innerHTML)+checknumcart;
                    document.getElementById(`pickcart${numberidcart}`).innerHTML = "ดูตะกร้าสินค้า";
                    var listcheck = [];
                    var listitem = { id: data.kaidee[numberid - 1].font, name: data.kaidee[numberid - 1].name, price: data.kaidee[numberid - 1].price, priceint: data.kaidee[numberid - 1].priceint, numitem: 1 };
                    listcheck.push(listitem);
                    localStorage.setItem(`datacart`, JSON.stringify(listcheck));
                }
                else {
                    var check = 1;
                    var listcheck = JSON.parse(localStorage.getItem(`datacart`));
                    for (var i = 0; i < listcheck.length; i++) {
                        if (listcheck[i] == null) {
                            continue;
                        }
                        if (data.kaidee[numberid - 1].font == listcheck[i].id) {
                            check = 0;
                            window.location.href = 'cart.html';
                            break;
                        }
                    }
                    if (check) {
                        document.getElementById('numcart1').innerHTML = parseInt(document.getElementById('numcart1').innerHTML)+checknumcart;
                        document.getElementById('numcart').innerHTML = parseInt(document.getElementById('numcart').innerHTML)+checknumcart;
                        document.getElementById(`pickcart${numberidcart}`).innerHTML = "ดูตะกร้าสินค้า";
                        var listitem = { id: data.kaidee[numberid - 1].font, name: data.kaidee[numberid - 1].name, price: data.kaidee[numberid - 1].price, priceint: data.kaidee[numberid - 1].priceint, numitem: 1 };
                        listcheck.push(listitem);
                        localStorage.setItem(`datacart`, JSON.stringify(listcheck));
                    }

                }
            }
        }
        else {
            if (JSON.parse(localStorage.getItem(`datacart`)) == null) {
                document.getElementById('numcart1').innerHTML = parseInt(document.getElementById('numcart1').innerHTML)+checknumcart;
                document.getElementById('numcart').innerHTML = parseInt(document.getElementById('numcart').innerHTML)+checknumcart;
                document.getElementById(`pickcart${numberidcart}`).innerHTML = "ดูตะกร้าสินค้า";
                if(name == "onsale"){
                    var listcheck = [];
                    var listitem = { id: data.onsale[numberid - 1].font, name: data.onsale[numberid - 1].name, price: data.onsale[numberid - 1].price, priceint: data.onsale[numberid - 1].priceint, numitem: 1 };
                    listcheck.push(listitem);
                    localStorage.setItem(`datacart`, JSON.stringify(listcheck));
                }
                else if(name == "new"){
                    var listcheck = [];
                    var listitem = { id: data.new[numberid - 1].font, name: data.new[numberid - 1].name, price: data.new[numberid - 1].price, priceint: data.new[numberid - 1].priceint, numitem: 1 };
                    listcheck.push(listitem);
                    localStorage.setItem(`datacart`, JSON.stringify(listcheck));
                }
                else if(name == "kaidee"){
                    var listcheck = [];
                    var listitem = { id: data.kaidee[numberid - 1].font, name: data.kaidee[numberid - 1].name, price: data.kaidee[numberid - 1].price, priceint: data.kaidee[numberid - 1].priceint, numitem: 1 };
                    listcheck.push(listitem);
                    localStorage.setItem(`datacart`, JSON.stringify(listcheck));
                }
                else{
                    var listcheck = [];
                    var listitem = { id: data[numberid - 1].font, name: data[numberid - 1].name, price: data[numberid - 1].price, priceint: data[numberid - 1].priceint, numitem: 1 };
                    listcheck.push(listitem);
                    localStorage.setItem(`datacart`, JSON.stringify(listcheck));
                }
            }
            else {
                var check = 1;
                var listcheck = JSON.parse(localStorage.getItem(`datacart`));
                for (var i = 0; i < listcheck.length; i++) {
                    if (listcheck[i] == null) {
                        continue;
                    }
                    if(name == "onsale"){
                        if (data.onsale[numberid - 1].font == listcheck[i].id) {
                            check = 0;
                            window.location.href = 'cart.html';
                            break;
                        }
                    }
                    if(name == "new"){
                        if (data.new[numberid - 1].font == listcheck[i].id) {
                            check = 0;
                            window.location.href = 'cart.html';
                            break;
                        }
                    }
                    if(name == "kaidee"){
                        if (data.kaidee[numberid - 1].font == listcheck[i].id) {
                            check = 0;
                            window.location.href = 'cart.html';
                            break;
                        }
                    }
                    else{
                        if (data[numberid - 1].font == listcheck[i].id) {
                            check = 0;
                            window.location.href = 'cart.html';
                            break;
                        }
                    }
                }
                if (check) {
                    document.getElementById('numcart1').innerHTML = parseInt(document.getElementById('numcart1').innerHTML)+checknumcart;
                    document.getElementById('numcart').innerHTML = parseInt(document.getElementById('numcart').innerHTML)+checknumcart;
                    document.getElementById(`pickcart${numberidcart}`).innerHTML = "ดูตะกร้าสินค้า";
                    if (name == "onsale") {
                        console.log(1);
                        var listitem = { id: data.onsale[numberid - 1].font, name: data.onsale[numberid - 1].name, price: data.onsale[numberid - 1].price, priceint: data.onsale[numberid - 1].priceint, numitem: 1 };
                        listcheck.push(listitem);
                        localStorage.setItem(`datacart`, JSON.stringify(listcheck));
                    }
                    else if (name == "new") {
                        var listitem = { id: data.new[numberid - 1].font, name: data.new[numberid - 1].name, price: data.new[numberid - 1].price, priceint: data.new[numberid - 1].priceint, numitem: 1 };
                        listcheck.push(listitem);
                        localStorage.setItem(`datacart`, JSON.stringify(listcheck));
                    }
                    else if (name == "kaidee") {
                        var listitem = { id: data.kaidee[numberid - 1].font, name: data.kaidee[numberid - 1].name, price: data.kaidee[numberid - 1].price, priceint: data.kaidee[numberid - 1].priceint, numitem: 1 };
                        listcheck.push(listitem);
                        localStorage.setItem(`datacart`, JSON.stringify(listcheck));
                    }
                    else{
                        var listitem = { id: data[numberid - 1].font, name: data[numberid - 1].name, price: data[numberid - 1].price, priceint: data[numberid - 1].priceint, numitem: 1 };
                        listcheck.push(listitem);
                        localStorage.setItem(`datacart`, JSON.stringify(listcheck));
                    }
                }

            }
        }
        // console.log(data[numberid-1].font);
        // console.log(data[numberid-1].name);

    }
    // location.reload();
}
