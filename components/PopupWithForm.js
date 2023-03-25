import Popup from "./Popup.js";

class PopupWithForm extends Popup{
    constructor(popupSelector){
        super(popupSelector);
        this._form = popupSelector.querySelector('.popup__form');
      }
      
      setEventListeners(){
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
          evt.preventDefault();
      })}
      
      closePopup() {
        super.closePopup();
        this._form.reset();
      }
}

export default PopupWithForm