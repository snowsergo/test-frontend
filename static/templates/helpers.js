//для указания объекта со свойствами
Handlebars.registerHelper("object", function ({ hash }) {
    return hash;
  });
  // для указания массива
  Handlebars.registerHelper("array", function () {
    return Array.from(arguments).slice(0, arguments.length - 1);
  });