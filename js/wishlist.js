var dict = {
    "sale": "sale.json",
    "accessory": "accessory.json",
    "Mobiuz": "Mobiuz.json",
    "kaidee": "kaidee.json",
    "mouse": "mouse.json",
    "mouse_pad": "mouse_pad.json",
    "XL_Monitor": "XL_Monitor.json",
    "Two":"Two.json"
};
function wishlist(name, numberid) {
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
        // console.log(data[numberid-1].font);
        // console.log(data[numberid-1].name);
        if (JSON.parse(localStorage.getItem(`data`)) == null) {
            var listcheck = [];
            var listitem = { id: data[numberid - 1].font, name: data[numberid - 1].name, price: data[numberid - 1].price };
            listcheck.push(listitem);
            localStorage.setItem(`data`, JSON.stringify(listcheck));
        }
        else {
            var listcheck = JSON.parse(localStorage.getItem(`data`));
            var listitem = { id: data[numberid - 1].font, name: data[numberid - 1].name, price: data[numberid - 1].price };
            listcheck.push(listitem);
            localStorage.setItem(`data`, JSON.stringify(listcheck));
            
        }
        console.log(JSON.parse(localStorage.getItem(`data`))[0]);  
    }

}