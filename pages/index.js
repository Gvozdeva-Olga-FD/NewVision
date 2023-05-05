import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js"
import {
  feedbackFormButton,
  PopupFeedbackForm,
  formValidatorObject,
} from '../utils/constants.js'

/*

const containerMenu = document.querySelector('.popup__activeMenu');
const newContainer = containerMenu.querySelector('.popup__container');
const headerMenu = document.querySelector('.header__menu');
const headerContainer = document.querySelector('.header__container');
const hamburgerButton = document.querySelector('.header__hamburgerButton')

function test(newNode, oldNode){
  return replacedNode = headerContainer.replaceChild(newNode, oldNode);
}

function delMenu(){
  newContainer.appendChild(test(hamburgerButton, headerMenu));
}


function calcWidth(){
  if(window.innerWidth > 1080){
    console.log('agaga')
  }else{
    return delMenu();
  }
}

window.addEventListener('resize', calcWidth);

*/


const formValidatorFeedbackForm = new FormValidator(formValidatorObject, PopupFeedbackForm);
formValidatorFeedbackForm.enableValidation();

const createPopupFeedbackForm = new PopupWithForm(PopupFeedbackForm);
createPopupFeedbackForm.setEventListeners();
  
function PopupForm(){
  createPopupFeedbackForm.openPopup();
  formValidatorFeedbackForm.resetOpnForm();
}

feedbackFormButton.addEventListener('click', PopupForm);


