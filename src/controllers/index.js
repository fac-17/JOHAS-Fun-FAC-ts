const express = require('express')
const router = express.Router()

// const home = require('./home')
// const makeStatement = require('./makeStatement')
// const makeGuess = require('./makeGuess')
const error = require('./error')


router.get("/", (req, res) => {
  res.render("home");
});

router.get("/makeStatement", (req, res) => {
  res.render("makeStatement")
});

router.get("/game", (req, res) => {
  res.render("game")
});

router.use(error.client)
router.use(error.server)

module.exports = router;