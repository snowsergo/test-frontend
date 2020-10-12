import { Validation }  from "../js/utils/validation.js";
import { MainApi } from "../js/api/mainapi.js";
import { server } from "../js/constants/server-info.js";

const mainApi = new MainApi();
const form = document.forms.authorization;
const answer = document.querySelector(".signin__error_total");
const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");
const submitButton = document.querySelector(".form__button");

const validOptions = {
  form: form,
  emailInput: emailInput,
  passwordInput:passwordInput,
  submitButton: submitButton,
}
const validObj = new Validation(validOptions);

//вход пользователя
function signin() {
  //event.preventDefault();
  mainApi.signin(
      server,
      emailInput.value,
      passwordInput.value
    )
    .then((res) => {
      console.log(res);
      if (!res.ok) {
        return res.json();
      } else {
        mainApi.getUserData(server).then((data) => {
        localStorage.setItem("userName", data.data.name);
        localStorage.setItem("isLoggedin", true);
        localStorage.setItem("userEmail", data.data.email);
        localStorage.setItem("userDate", data.data.date);
         document.location.href = "../index.html";
        });
        return;
      }
    })
    .then((data) => {
      if (data) {
       // выводим сообщение об ошибки в форме
        answer.textContent = data.message;
        answer.classList.add("form__error_visible");
      }
    })
    .catch((err) => {
      console.log("Ошибка входа пользователя", err);
    });
}



function formValidation(event) {
  validObj.formValidate(); // валидация формы
   validObj.handleValidate(event.target); //  валидация input'ов
  }

  form.addEventListener("focusin", ()=>{
    form.addEventListener("input", formValidation);
});

form.addEventListener("focusout", ()=>{
    form.removeEventListener("input", formValidation);
});

form.addEventListener("submit", function(event){
  event.preventDefault();
  signin(event);
})