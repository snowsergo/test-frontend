export const authorizationTemplate = `<div class="page">
<form class="form form__signup" name="authorization">
   
    {{> Title object tag="h1" class="form__title" text="Вход"}}
    <div class ="form__container">
    {{> Title object tag="h2" class="form__subtitle" text="Почта"}}
    {{>Input object type ="email" id="email-input" class="form__input signin__input signin__email" placeholder=""}}
    <p class ="form__error signin__error_email" id="error-email-input">Validation-message</p>
    </div>

    <div class ="form__container">
    {{> Title object tag="h2" class="form__subtitle" text="Пароль"}}
    {{>Input object type ="password" id="password-input" class="form__input signin__password" placeholder=""}}
    <p class ="form__error signin__error signin__error_password" id="error-password-input">Validation-message</p>
    <p class ="form__error  form__error_total signin__error signin__error_total">Ошибка сервера</p>
    </div>
    
    

    {{> Button object disabled="disabled" class="form__button" type="submit" text="Авторизоваться"}}

    <a class="form__link" href ="../registration/registration.html">Нет аккаунта?</a>
    </form>

</div>`

