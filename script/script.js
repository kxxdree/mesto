let container = document.querySelector('.page');
let content = container.querySelector('.content');
let profile = content.querySelector('.profile');
let editButton = profile.querySelector('.profile__edit_button');
let popup = container.querySelector('.popup');
let popupClose = popup.querySelector('.popup__close');
let formElement = popup.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__input_name')
let jobInput = popup.querySelector('.popup__input_subscription');
let profileTitle = profile.querySelector('.profile__title');
let profileSubtitle = profile.querySelector('.profile__subtitle');
let saveButton = formElement.querySelector('.popup__save');


function showClick() {
    popup.classList.add('popup__opened');
    nameInput.textContent = profileTitle.value;
    jobInput.textContent = profileSubtitle.value;
}

function closeClick() {
    popup.classList.remove('popup__opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;
    closeClick();

}

editButton.addEventListener('click', showClick);
popupClose.addEventListener('click', closeClick);
formElement.addEventListener('submit', formSubmitHandler);
saveButton.addEventListener('submit', formSubmitHandler);
