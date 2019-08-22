// final app exported to index.js
const express = require("express");
const path = require("path");
// const favicon = require('serve-favicon');
const expressHandlebars = require("express-handlebars");
const controllers = require("./controllers/index");
const helpers = require("./views/helpers");

const app = express();

app.set("port", process.env.PORT || 3000);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.engine(
  "hbs",
  expressHandlebars({
    extname: "hbs",
    layoutsDir: path.join(__dirname, "views", "layouts"),
    partialsDir: path.join(__dirname, "views", "partials"),
    defaultLayout: "main"
  })
);

app.use(express.static(path.join(__dirname, '..', 'public')))
app.use(controllers)

module.exports = app;