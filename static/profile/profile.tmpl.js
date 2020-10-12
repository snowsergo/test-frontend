export const profileTemplate = `
<div class="page">
<header class="header">

      <div class="header__block">
        <h1 class="header__title">Ваш личный кабинет</h1>
        <p class="email">some-email@yandex.com</p>
        <button class="header__button">Выйти</button>
      </div>

      <nav class="header__nav">
        
        <a class="header__link" href="../index.html">Профиль</a>
        <a class="header__link" href="../lines/lines.html">Линии</a>
        <a class="header__link" href="../calls/calls.html">Звонки</a>
        <a class="header__link" href="../bills/bills.html">Счета</a>
      </nav>

      
    </header>

    <section class="info">

        {{> Avatar object class="info__avatar" src="../images/no_avatar.jpg" }}
        {{> Title object tag="h1" class="name" text="User__NAME"}}

        <!--info__card_is-opened  для открытия-->
        <form class="info__card info__card_form info__card_is-opened" name="profile">
          
            
            <div class="info__container info__container_underline">
               {{> Title object tag="h2" class="info__subtitle" text="Логин"}}
               {{>Input object type ="text" id="login-input" class="info__input" placeholder="some-login"}}
               <p class ="form__error signin__error signin__error_login form__error_profile" id="error-login-input">Validation-message</p>
            </div>
            

            <div class="info__container info__container_underline">
            {{> Title object tag="h2" class="info__subtitle" text="Новый пароль"}}
            {{>Input object type ="password" id="password-input" class="info__input" placeholder="Введите пароль"}}
            <p class ="form__error signin__error signin__error_password form__error_profile" id="error-password-input">Validation-message</p>
            </div>
            

            <div class="info__container info__container_underline">
            {{> Title object tag="h2" class="info__subtitle" text="Новый пароль еще раз"}}
            {{>Input object type ="password" id="password-second-input" class="info__input" placeholder="Введите пароль повторно"}}
            <p class ="form__error signin__error signin__error_password form__error_profile" id="error-password-second-input">Validation-message</p>
            <p class ="form__error form__error_total signin__error signin__error_total">Ошибка сервера</p>
            </div>

            {{> Button object disabled="disabled" class="form__button info__save-button" type ="submit" text ="Сохранить"}}
            <a class="info__link" href ="../index.html">Назад</a>
        </form>


    </section>

   

</div>`

// {{>Input object type ="email" id="email-input" class="info__input" placeholder="some-email@gmail.com"}}