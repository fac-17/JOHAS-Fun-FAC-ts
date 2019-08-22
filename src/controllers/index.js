const express = require("express");
const queries = require("../model/queries/queries");

const router = express.Router();

// const home = require('./home')
// const makeStatement = require('./makeStatement')
// const makeGuess = require('./makeGuess')
const error = require("./error");

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/makeStatement", (req, res) => {
  res.render("makeStatement");
});

router.post("/submit_statement", (req, res) => {
  //res.render("home");
  console.log("the endpoint is", res);
  console.log("the req is", req);

  // queries.postStatement((err, res) => {
  //   if (err) {
  //     console.log("i am err", err);
  //   } else {
  //     console.log("i am res", res);
  //   }
  // });
});

router.use(error.client);
router.use(error.server);

module.exports = router;
