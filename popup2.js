// Чтобы попап появлялся по клику на кнопку (начало)

let button = document.querySelector('.button');
let loginPopup = document.querySelector('.login-popup');

console.log(button);
console.log(loginPopup);

button.addEventListener('click', showPopup);

function showPopup(evt) {
    console.log(evt);
    evt.preventDefault();

    loginPopup.classList.toggle('show-popup')
};
// Чтобы попап появлялся по клику на кнопку (конец)

