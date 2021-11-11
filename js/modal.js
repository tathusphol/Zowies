function openmodal(jsonname, idnum) {
    localStorage.setItem('jsonname', jsonname);
    localStorage.setItem('idnum', idnum);
    openmodalinhtml();
}
function closemodal() {
    console.log(1);
    setTimeout(() => {
        document.getElementById('modal').classList.add('hidden');
    }, 350);
    setTimeout(() => {
        document.getElementById('bg-sidebar').classList.add('hidden');
    }, 400);
    document.getElementById('modal').classList.remove('animatesearch');
    document.getElementById('modal').classList.add('animateclose');

}
function openmodalinhtml() {
    document.getElementById('bg-sidebar').classList.remove('hidden');
    document.getElementById('modal').classList.remove('hidden');
    document.getElementById('modal').classList.add('animatesearch');
    document.getElementById('modal').classList.remove('animateclose');
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
    let namejson = localStorage.getItem('jsonname');
    let numid = localStorage.getItem('idnum') - 1;
    let requestURL = `/json/${dict[namejson]}`;
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            dataReportStatus(JSON.parse(request.responseText));
        }
    };
    request.open("GET", requestURL, true);
    request.send();
    let imgmodal = document.getElementById('imgopenmodal');
    let pricemodal = document.getElementById('pricemodal');
    let textnamemodal = document.getElementById('namemodal');
    let textdata1modal = document.getElementById('datamodal1');
    let textdata2modal = document.getElementById('datamodal2');
    let datapricemodal;
    let datatextnamemodal;
    let datatextdata1modal;
    let datatextdata2modal;
    let dataimgmodal;
    function dataReportStatus(data) {
        if (namejson == 'onsale') {
            dataimgmodal = data.onsale[numid].font;
            datapricemodal = data.onsale[numid].price;
            datatextnamemodal = data.onsale[numid].name;
            datatextdata1modal = data.onsale[numid].textdata1;
            datatextdata2modal = data.onsale[numid].textdata2;
        }
        else if (namejson == 'new') {
            dataimgmodal = data.new[numid].font;
            datapricemodal = data.new[numid].price;
            datatextnamemodal = data.new[numid].name;
            datatextdata1modal = data.new[numid].textdata1;
            datatextdata2modal = data.new[numid].textdata2;
        }
        else if (namejson == 'kaidee') {
            dataimgmodal = data.kaidee[numid].font;
            datapricemodal = data.kaidee[numid].price;
            datatextnamemodal = data.kaidee[numid].name;
            datatextdata1modal = data.kaidee[numid].textdata1;
            datatextdata2modal = data.kaidee[numid].textdata2;
        }
        else {
            dataimgmodal = data[numid].font;
            datapricemodal = data[numid].price;
            datatextnamemodal = data[numid].name;
            datatextdata1modal = data[numid].textdata1;
            datatextdata2modal = data[numid].textdata2;
        }
        var checkcartmodal = JSON.parse(localStorage.getItem(`datacart`));
        for (var i = 0; i < data.length; i++) {
            if (checkcartmodal == null) {
                continue;
            }
            else {
                for (var j = 0; j < checkcartmodal.length; j++) {
                    if (checkcartmodal[j] == null) {
                        continue;
    
                    }
                    if (dataimgmodal == checkcartmodal[j].id) {
                        document.getElementById(`modalbutton`).innerHTML = "ดูตะกร้าสินค้า";
                        break;
                    }
                    else{
                        document.getElementById(`modalbutton`).innerHTML = "หยิบใส่ตะกร้า";
                    }
                }
            }
        }
        imgmodal.src = dataimgmodal;
        pricemodal.innerHTML = datapricemodal;
        textnamemodal.innerHTML = datatextnamemodal;
        textdata1modal.innerHTML = datatextdata1modal;
        textdata2modal.innerHTML = datatextdata2modal;
    }

}