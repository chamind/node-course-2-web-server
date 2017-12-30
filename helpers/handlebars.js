module.exports = (hbs) => {
  
  hbs.registerPartials('./views/partials');

  hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
  });

  hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
  });

}
