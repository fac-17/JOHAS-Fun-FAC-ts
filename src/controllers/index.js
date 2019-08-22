const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({
  extended: false
});

const error = require("./error");
const statementList = require("./statementList");
const postStatement = require("./postStatement");

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/statement", (req, res) => {
  res.render("makeStatement");
});

router.get("/game", statementList.statements);

router.post("/submit_statement", urlencodedParser, postStatement.formSubmit);

router.use(error.client);
router.use(error.server);

module.exports = router;