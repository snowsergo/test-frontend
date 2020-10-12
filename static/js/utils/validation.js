import { message, errorClasses } from "../constants/validation-messages.js";

export class Validation {
  constructor(obj) {
    this.form = obj.form;
    this.emailInput = obj.emailInput;
    this.loginInput = obj.loginInput;
    this.passwordInput = obj.passwordInput;
    this.passwordSecondInput = obj.passwordSecondInput;
    this.submitButton = obj.submitButton;
    this.messageInput = obj.messageInput;
    this.result = {};
  }

  // проверка email
  checkEmail() {
    const Reg = /\w+([-.]*\w*)*?@\w+\.[a-z]{2,}/;
    const str = this.emailInput.value;
    return Reg.test(str);
  }

  // проверка password
  checkPassword() {
    const Reg = /.{8,}/;
    const str = this.passwordInput.value;
    return Reg.test(str);
  }

  // проверка второго password
  checkSecondPassword() {
    if (!this.passwordSecondInput.value) {
      return false;
    } else {
      return this.passwordSecondInput.value === this.passwordInput.value;
    }
  }

  // проверка name
  checkName() {
    const Reg = /^[\D](.*)[\w]/;
    const str = this.loginInput.value;
    return Reg.test(str);
  }

  checkMessage() {
    const Reg = /[^\s]/;
    const str = this.messageInput.value;
    return Reg.test(str);
  }

  hideError(element) {
    // меняем текст ошибки, потому от сервера могу приходить разнообразные ошибки
    element.textContent = message.ru.validationDone;
    element.classList.remove(errorClasses.en.displayError);
  }

  showError(element, text) {
    // меняем текст ошибки, потому от сервера могу приходить разнообразные ошибки
    element.textContent = text;
    element.classList.add(errorClasses.en.displayError);
  }

  totalMessageRemove(){
    const errorElement = document.querySelector('.form__error_total');
    errorElement.textContent = message.ru.validationDone;
        errorElement.classList.remove("form__error_visible");
  }


  //проверка ввода email
  inputEmailValidate(element) {
    this.totalMessageRemove();
    const errorElement = document.querySelector(`#error-${element.id}`);
    if (this.checkEmail() || !this.emailInput.value) {
      this.hideError(errorElement);
      return true;
    } else {
      this.showError(errorElement, message.ru.validationEmail);
      return false;
    }
  }

  //проверка ввода имени
  inputNameValidate(element) {
    this.totalMessageRemove();
    const errorElement = document.querySelector(`#error-${element.id}`);
    if (this.checkName() || !this.loginInput.value) {
      this.hideError(errorElement);
      return true;
    } else {
      this.showError(errorElement, message.ru.validationName);
      return false;
    }
  }

  //проверка ввода пароля
  inputPasswordValidate(element) {
    this.totalMessageRemove();
    const errorElement = document.querySelector(`#error-${element.id}`);
    if (this.checkPassword() || !this.passwordInput.value) {
      this.hideError(errorElement);
      return true;
    } else {
      this.showError(errorElement, message.ru.validationPassword);
      return false;
    }
  }

  //проверка ввода второго пароля
  inputSecondPasswordValidate(element) {
    this.totalMessageRemove();
    const errorElement = document.querySelector(`#error-${element.id}`);
    if (this.checkSecondPassword() || !this.passwordSecondInput.value) {
      this.hideError(errorElement);
      return true;
    } else {
      this.showError(errorElement, message.ru.validationSecondPassword);
      return false;
    }
  }

  // очистка всех errors
  clearErrors() {
    const errors = document.querySelectorAll(".form__error");
    for (let i = 0; i < errors.length; i++) {
      this.hideError(errors[i]);
    }
  }

  createResultObj() {
    if (this.loginInput) {
      this.result.name = this.loginInput.value;
    }
    if (this.emailInput) {
      this.result.email = this.emailInput.value;
    }
    if (this.passwordInput) {
      this.result.password = this.passwordInput.value;
    }
    if (this.passwordSecondInput) {
      this.result.secondPassword = this.passwordSecondInput.value;
    }
    if (this.messageInput) {
      this.result.message = this.messageInput.value;
    }
  }

  //проверка формы
  formValidate() {
    if (
      (this.loginInput ? this.checkName() : true) &&
      (this.emailInput ? this.checkEmail() : true) &&
      (this.passwordInput ? this.checkPassword() : true) &&
      (this.passwordSecondInput ? this.checkSecondPassword() : true) &&
      (this.messageInput ? this.checkMessage() : true)
    ) {
      this.buttonActivate();
      this.createResultObj();
    } else {
      this.buttonDisActivate();
    }
  }

  totalFormValidation(event){
   // this.formValidate();
    this.handleValidate(event.target);
  }

  //активация submit кнопки
  buttonActivate() {
    if (!this.messageInput) {
      this.submitButton.classList.add("form__button-is-active");
    } else {
      this.submitButton.classList.add("messages__sent-button_is-active");
    }
    this.submitButton.removeAttribute("disabled");
  }
//деактивация submit кнопки
  buttonDisActivate() {
    if (!this.messageInput) {
      this.submitButton.classList.remove("form__button-is-active");
    } else {
      this.submitButton.classList.remove("messages__sent-button_is-active");
    }
    this.submitButton.setAttribute("disabled", true);
  }

  

  // валидация инпутов
  handleValidate(target) {
    switch (target) {
      case this.emailInput:
        this.inputEmailValidate(target);
        break;
      case this.loginInput:
        this.inputNameValidate(target);
        break;

      case this.passwordInput:
        this.inputPasswordValidate(target);
        break;

      case this.passwordSecondInput:
        this.inputSecondPasswordValidate(target);
        break;
    }
  }


}
