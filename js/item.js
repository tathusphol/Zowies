function item(namejson, numid) {
    localStorage.setItem('namejson', namejson);
    localStorage.setItem('numid', numid);
    window.location.href = 'item.html';
}