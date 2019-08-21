// final app exported to index.js
const express = require('express');
const path = require('path');
// const favicon = require('serve-favicon');
const expressHandlebars = require('express-handlebars');
const controllers = require('./controllers');
const helpers = require('./views/helpers');

const app = express();

app.set('port', process.env.PORT || 3000);
// app.use(controllers);


module.exports = app;
