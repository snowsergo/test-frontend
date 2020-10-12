import { MainApi }  from "./js/api/mainapi.js";
const mainApi = new MainApi();
const exitButton = document.querySelector(".header__button");

mainApi.setUser();

function logout() {
  localStorage.setItem("userName", "");
  localStorage.setItem("userEmail", "");
  localStorage.setItem("isLoggedin", false);
  document.location.href = "../registration/registration.html";
}

exitButton.addEventListener("click",logout);
