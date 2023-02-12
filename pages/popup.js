// Чтобы попап появлялся по клику на кнопку (начало)

let button = document.querySelector('.button');
let loginPopup = document.querySelector('.login-popup');

console.log(button);
console.log(loginPopup);

button.addEventListener('click', showPopup);

function showPopup(burum) {
    console.log(burum);
    burum.preventDefault();

    loginPopup.classList.toggle('show-popup')
};
// Чтобы попап появлялся по клику на кнопку (конец)

