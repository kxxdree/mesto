let container = document.querySelector('.page');
let profile = container.querySelector('.profile');
let editButton = profile.querySelector('.profile__edit_button');
let popup = container.querySelector('.popup');
let popupClose = popup.querySelector('.popup__close');
let formElement = popup.querySelector('popup__form');


function showClick() {
    popup.classList.add('popup__opened');
}

function closeClick () {
    popup.classList.remove('popup__opened');
}

editButton.addEventListener('click', showClick);
popupClose.addEventListener('click', closeClick);


