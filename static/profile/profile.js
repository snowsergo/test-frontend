import { Validation } from "../js/utils/validation.js";
import { MainApi } from "../js/api/mainapi.js";
import { server } from "../js/constants/server-info.js";

const form = document.forms.profile;
const mainApi = new MainApi();
//const emailInput = document.querySelector("#email-input");
const loginInput = document.querySelector("#login-input");
const passwordInput = document.querySelector("#password-input");
const passwordSecondInput = document.querySelector("#password-second-input");
const submitButton = document.querySelector(".form__button");
const exitButton = document.querySelector(".header__button");
const answer = document.querySelector(".signin__error_total");

const validOptions = {
  form: form,
  loginInput: loginInput,
  passwordInput: passwordInput,
  passwordSecondInput: passwordSecondInput,
  submitButton: submitButton,
};
const validObj = new Validation(validOptions);

mainApi.setUser();

function logout() {
  localStorage.setItem("userName", "");
  localStorage.setItem("userEmail", "");
  localStorage.setItem("isLoggedin", false);
  document.location.href = "../registration/registration.html";
}

function formValidation(event) {
  validObj.formValidate(); // валидация формы
  validObj.handleValidate(event.target); //  валидация input'ов
}

function update(event) {
  event.preventDefault();
  const email = localStorage.getItem("userEmail");
  mainApi
    .update(server, email, passwordInput.value, loginInput.value)
    .then((res) => {
      if (res.ok) {
        answer.textContent = "Данные профиля изменени";
        answer.classList.add("form__error_visible-blue");
        return res.json();
      } else return res.json();
    })
    .then((data) => {
      if (data) {
        console.log(data);
        localStorage.setItem("userName", data.data.name);
        mainApi.setUser();
      }
    })
    .catch((err) => {
      console.log("Ошибка обновления данных пользователя", err);
    });
}

form.addEventListener("focusin", () => {
  form.addEventListener("input", formValidation);
});

form.addEventListener("focusout", () => {
  form.removeEventListener("input", formValidation);
});

form.addEventListener("submit", function (event) {
  update(event);
});

exitButton.addEventListener("click", logout);
