export const registrationTemplate = `<div class="page">
<form class="form form__signin" name="registration">
    
    {{> Title object tag="h1" class="form__title" text="Регистрация"}}
    <div class ="form__container">
    {{> Title object tag="h2" class="form__subtitle" text="Почта"}}
    {{>Input object type ="email" id="email-input" class="form__input signin__input signin__email" placeholder=""}}
    <p class ="form__error signin__error_email" id="error-email-input">Validation-message</p>
    </div>
    <div class ="form__container">
    {{> Title object tag="h2" class="form__subtitle" text="Логин"}}
    {{>Input object type ="text" id="login-input" class="form__input signin__login" placeholder=""}}
    <p class ="form__error signin__error signin__error_login" id="error-login-input">Validation-message</p>
    </div>
    <div class ="form__container">
    {{> Title object tag="h2" class="form__subtitle" text="Пароль"}}
    {{>Input object type ="password" id="password-input" class="form__input signin__password" placeholder=""}}
    <p class ="form__error signin__error signin__error_password" id="error-password-input">Validation-message</p>
</div>
<div class ="form__container">
    {{> Title object tag="h2" class="form__subtitle" text="Пароль еще раз"}}
    {{>Input object type ="password" id="password-second-input" class="form__input signin__password" placeholder=""}}
    <p class ="form__error signin__error signin__error_password" id="error-password-second-input">Validation-message</p>
    <p class ="form__error form__error_total signin__error signin__error_total">Ошибка сервера</p>
    </div>
    

   
    {{> Button object disabled ="disabled" class="form__button" type="submit" text="Зарегистрироваться"}}
    <a class="form__link" href ="../autorization/authorization.html">Войти</a>
</form>

</div>`

