var dict = {
    "sale": "sale.json",
    "accessory": "accessory.json",
    "Mobiuz": "Mobiuz.json",
    "kaidee": "kaidee.json",
    "mouse": "mouse.json",
    "mouse_pad": "mouse_pad.json",
    "XL_Monitor": "XL_Monitor.json",
    "Two": "Two_hand.json"
};
function wishlist(name, numberid) {
    // localStorage.removeItem();
    let heart = document.getElementById(`heart${numberid}`);
    heart.classList.add('heart1');
    heart.classList.remove('heart');
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
            var listitem = { id: data[numberid - 1].font, name: data[numberid - 1].name, price: data[numberid - 1].price , numitem: 1};
            listcheck.push(listitem);
            localStorage.setItem(`data`, JSON.stringify(listcheck));
        }
        else {
            var check = 1;
            var listcheck = JSON.parse(localStorage.getItem(`data`));
            for (var i = 0; i < listcheck.length; i++) {
                if (listcheck[i] == null) {
                    continue;
                }
                if (data[numberid - 1].font == listcheck[i].id) {
                    check = 0;
                    window.location.href = 'wishlist.html';
                    break;
                }
            }
            if (check) {
                var listitem = { id: data[numberid - 1].font, name: data[numberid - 1].name, price: data[numberid - 1].price , numitem: 1};
                listcheck.push(listitem);
                localStorage.setItem(`data`, JSON.stringify(listcheck));
            }

        }
    }
    location.reload();

}