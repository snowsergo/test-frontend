import { authorizationTemplate } from "./authorization.tmpl.js";
import { inputTemplate } from "../templates/input.tmpl.js";
import { buttonTemplate } from "../templates/button.tmpl.js";
import { titleTemplate } from "../templates/title.tmpl.js";

const Template = Handlebars.compile(authorizationTemplate);
const Input = Handlebars.compile(inputTemplate);
const Button = Handlebars.compile(buttonTemplate);
const Title = Handlebars.compile(titleTemplate);


Handlebars.registerPartial("Input", Input);
Handlebars.registerPartial("Button", Button);

Handlebars.registerPartial("Title", Title);

document.getElementsByTagName('body')[0].innerHTML = Template();