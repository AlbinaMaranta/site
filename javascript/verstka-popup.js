let button = document.querySelector('.button');
let loginPopup = document.querySelector('.login-popup');


button.addEventListener('click', showPopup);


function showPopup (burum) {
    burum.preventDefault;
loginPopup.classList.toggle('show-popup')
}