import { Validation }  from "../js/utils/validation.js";
import { MainApi } from "../js/api/mainapi.js";
import { server } from "../js/constants/server-info.js";

const mainApi = new MainApi();
const registrationForm = document.forms.registration;
const answer = document.querySelector(".signin__error_total");
const emailInput = document.querySelector("#email-input");
const loginInput = document.querySelector("#login-input");
const passwordInput = document.querySelector("#password-input");
const passwordSecondInput = document.querySelector("#password-second-input");
const submitButton = document.querySelector(".form__button");

const validOptions = {
  form: registrationForm,
  emailInput: emailInput,
  loginInput:loginInput,
  passwordInput:passwordInput,
  passwordSecondInput:passwordSecondInput,
  submitButton: submitButton,
}
const validObj = new Validation(validOptions);


function signup(event) {
  mainApi
    .signup(
      server,
      emailInput.value,
      passwordInput.value,
      loginInput.value
    )
    .then((res) => {
      if (res.ok) {
        answer.textContent = "Пользователь успешно создан, пожалуйста преверьте указанную почту для подтверждения регистрации";
        answer.classList.add("form__error_visible-blue");
      } else return res.json();
    })
    .then((data) => {
      if (data) {
        answer.textContent = data.message;
        answer.classList.add("form__error_visible");
      }
    })
    .catch((err) => {
      console.log("Ошибка создания пользователя", err);
    });
}


function formValidation(event) {
  validObj.formValidate(); // валидация формы
   validObj.handleValidate(event.target); //  валидация input'ов
  }

registrationForm.addEventListener("focusin", ()=>{
    registrationForm.addEventListener("input", formValidation);
});

registrationForm.addEventListener("focusout", ()=>{
    registrationForm.removeEventListener("input", formValidation);
});

registrationForm.addEventListener("submit", function(event){
  event.preventDefault();
  signup(event);
})

