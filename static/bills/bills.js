import { MainApi } from "../js/api/mainapi.js";
import { server } from "../js/constants/server-info.js";
import { Tables } from "../js/utils/render-tables.js";

const pages = document.querySelector(".pages");
const exitButton = document.querySelector(".header__button");
const mainApi = new MainApi();
const table = new Tables();

function logout() {
  localStorage.setItem("userName", "");
  localStorage.setItem("userEmail", "");
  localStorage.setItem("isLoggedin", false);
  document.location.href = "../registration/registration.html";
}

//отрисовка по нажатю
function renderPage(event) {
  const firstTr = +(event.target.textContent - 1) * table.group;
  table.render(table.allLines, firstTr, firstTr + table.group);
}

mainApi.setUser();

mainApi.getBills(server).then((res) => {
  if (res.data.length != 0) {
    table.pagesCount = Math.ceil(res.data.length / table.group);

    for (let i = 0; i < table.pagesCount; i++) {
      const pageButton = document.createElement("button");
      pageButton.classList.add("page-button");
      pageButton.textContent = i + 1;
      pages.innerHTML += `${pageButton.outerHTML}`;
    }

    table.allLines = res.data;

    //отрисовка таблицы
    table.render(res.data, 0, table.group);
    //пагинация
  }
});

//отрисовка по нажатю на кнопку
pages.addEventListener("click", renderPage);

//выход пользователя
exitButton.addEventListener("click", logout);
