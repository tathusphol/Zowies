function openline(){
    document.getElementById('textline').classList.remove('hidden');
    document.getElementById('textline').classList.remove('animatelineclose');
    document.getElementById('textline').classList.add('animatelineopen');
}
function closeline(){
    document.getElementById('textline').classList.remove('animatelineopen');
    document.getElementById('textline').classList.add('animatelineclose');
    setTimeout(() => {
        document.getElementById('textline').classList.add('hidden');
    },350);
}