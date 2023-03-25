import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js"
import {
  feedbackFormButton,
  PopupFeedbackForm,
  formValidatorObject,
} from '../utils/constants.js'


const formValidatorFeedbackForm = new FormValidator(formValidatorObject, PopupFeedbackForm);
formValidatorFeedbackForm.enableValidation();

const createPopupFeedbackForm = new PopupWithForm(PopupFeedbackForm);
createPopupFeedbackForm.setEventListeners();
  
function PopupForm(){
  createPopupFeedbackForm.openPopup();
  formValidatorFeedbackForm.resetOpnForm();
}

feedbackFormButton.addEventListener('click', PopupForm);


