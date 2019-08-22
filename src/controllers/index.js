const express = require('express')
const router = express.Router()

// const home = require('./home')
// const makeStatement = require('./makeStatement')
// const makeGuess = require('./makeGuess')
const error = require('./error')
const statementList = require('./statementList');


router.get("/", (req, res) => {
  res.render("home");
});

router.get("/statement", (req, res) => {
  res.render("makeStatement");
});

router.get("/game", statementList.statements);

router.use(error.client);
router.use(error.server);

module.exports = router;