// Require Framework
const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const app = express();
app.disable('etag'); //解决304 Not Modified问题

// HBS
app.set('vew engine', 'hbs');
require('./helpers/handlebars.js')(hbs);


// EXPRESS MIDDLEWARE
app.use((req, res, next) => {

  const now = new Date().toString();

  const log = (`${now}: ${req.method} ${req.url}`);
  fs.appendFile('server.log', log + '\n', (err) => {
    if (err)
    console.log('Unable to append to server.log');
  });

  next();
});

// app.use((req, res, next) => {
//   res.render('404.hbs');
// })

app.use(express.static(__dirname + '/public'));

// ROUTE Start
app.get('/', (req, res) => {

  res.render('home.hbs', {
    pageTitle: 'Home Page',
    greeting: 'Welcome To My Website!'
  });
});

app.get('/about', (req, res) => {

  res.render(('about.hbs'), {
    pageTitle: 'Abou Page',
    Author: 'Cham'
  });
});
// Route End
app.listen(3000, () => {
  console.log('Server online!');
});
