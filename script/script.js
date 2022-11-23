let container = document.querySelector('.page');
let content = container.querySelector('.content');
let profile = content.querySelector('.profile');
let editButton = profile.querySelector('.profile__edit_button');
let popup = container.querySelector('.popup');
let popupClose = popup.querySelector('.popup__close');

function showClick() {
    popup.classList.add('popup__opened');
}

function closeClick() {
    popup.classList.remove('popup__opened');
}

editButton.addEventListener('click', showClick);
popupClose.addEventListener('click', closeClick);
