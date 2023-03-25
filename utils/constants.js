export const buttonNameChange = document.querySelector(".profile__button-name-change");
export const buttonAddPlace = document.querySelector(".profile__button-add-place");
export const formDetails = document.forms.persDetails;
export const popupName = formDetails.querySelector(".popup__content_type_name");
export const popupOccupation = formDetails.querySelector(".popup__content_type_occupation");
export const popupFullPhoto = document.querySelector('.popup_full-img');
export const popupChangeName = document.querySelector('.popup_name-change');
export const popupAddPlace = document.querySelector('.popup_add-place');

export const elements = '.elements';

export const initialCards = [
  {
    name: 'Кольский полуостров',
    link: './images/kola-peninsula.jpg'
  },
  {
    name: 'Ладожское озеро',
    link: './images/ladozhskoe-ozero.jpg'
  },
  {
    name: 'Плато-Путорана',
    link: './images/plato-putorana.jpg'
  },
  {
    name: 'Рускеала',
    link: './images/ruskeala.jpg'
  },
  {
    name: 'Соловецкие острова',
    link: './images/solovky.jpg'
  },
  {
    name: 'Камчатка',
    link: './images/kamchatka.jpg'
  }
]; 

export const createNewCardObject = {
  nameElement: '.element__name',
  photoElement: '.element__photo',
  likeElement: '.element__like',
  deleteElement: '.element__delete',
  element: '.element',
}

export const formValidatorPlaceObject = {
  formSelectors: '.popup__form',
  inputSelectors: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_inactive', 
  errorInput: 'popup__input_error',
  errorClass: 'popup__message-error_active'
}

export const personalDetails = {
  profileName: document.querySelector('.profile__name'),
  profileOccupation: document.querySelector('.profile__occupation')
}
