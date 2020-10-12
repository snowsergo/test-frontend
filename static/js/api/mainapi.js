export class MainApi {
  constructor() {}

  // устанавливаем пользоватея при входе на страницу с сохраненными статьями
  setUser() {
    if (localStorage.getItem("isLoggedin") === "true") {
      const email = document.querySelector(".email");
      const user = document.querySelector(".name");
      const date = document.querySelector(".date");
    if(email){
      email.textContent = localStorage.getItem("userEmail");
    }  
      if(user){
        user.textContent = localStorage.getItem("userName");
      }
      if(date){
        date.textContent = localStorage.getItem("userDate");
      }
    } else {
      document.location.href = "./registration/registration.html";
    }
  }

  //регистрирует нового пользователя;
  signup(server, email, password, name) {
    return fetch(`${server}/signup`, {
      method: "POST",
      // mode:'no-cors',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        name: name,
      }),
    }).catch((err) => {
      console.log("Ошибка отправки данных пользователя", err);
    });
  }

  //вход пользователя, авторизация
  signin(server, email, password) {
    return fetch(`${server}/signin`, {
      method: "POST",
      // mode:'no-cors',
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }).catch((err) => {
      console.log("ошибка в mainapi.signin", err);
    });
  }

  // запрос данных пользователя
  getUserData(server) {
    return fetch(`${server}/users/me`, {
      method: "GET",
      credentials: "include",
      // mode:'no-cors',
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .catch((err) => {
        console.log("Ошибочка получения данных пользователя", err);
      });
  }

 
  //забирает все lines;
  getLines(server) {
    return fetch(`${server}/lines`, {
      // method: "GET",
      credentials: "include",
    }).then((res) => {
      if (res.ok) {
        return res.json();
      } else if (res.status == 404) {
        const empty = { data: [] };
        return empty; // если нет карточек возвращаем пустой объект
      }
      return Promise.reject(`Ошибка загрузки линий: ${res.status}`);
    });
  }

   //забирает все lines;
   getCalls(server) {
    return fetch(`${server}/calls`, {
      // method: "GET",
      credentials: "include",
    }).then((res) => {
      if (res.ok) {
        return res.json();
      } else if (res.status == 404) {
        const empty = { data: [] };
        return empty; // если нет карточек возвращаем пустой объект
      }
      return Promise.reject(`Ошибка загрузки линий: ${res.status}`);
    });
  }

  getBills(server) {
    return fetch(`${server}/bills`, {
      // method: "GET",
      credentials: "include",
    }).then((res) => {
      if (res.ok) {
        return res.json();
      } else if (res.status == 404) {
        const empty = { data: [] };
        return empty; // если нет карточек возвращаем пустой объект
      }
      return Promise.reject(`Ошибка загрузки линий: ${res.status}`);
    });
  }


  update(server, email, password, name) {
    return fetch(`${server}/update`, {
      method: "PATCH",
      credentials: "include",
      // mode:'no-cors',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        name: name,
      }),
    }).catch((err) => {
      console.log("Ошибка отправки данных пользователя", err);
    });
  }
}
