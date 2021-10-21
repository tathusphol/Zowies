let num = (localStorage.getItem(`number`));

var dict = {
    "sale": "sale.json",
    "access": "accessory.json",
    "mobiuz": "Mobiuz.json"
};
function wishlist(name, numberid) {
    // localStorage.removeItem();
    if (num != null) {
        num = parseInt(num);
    }
    num += 1;
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
        localStorage.setItem(`number`, num);
        localStorage.setItem(`id${num}`, data[numberid - 1].font);
        localStorage.setItem(`name${num}`, data[numberid - 1].name);
        localStorage.setItem(`price${num}`, data[numberid - 1].price);
    }

}