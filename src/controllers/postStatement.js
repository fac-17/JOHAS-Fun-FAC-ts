const queries = require("../model/queries/queries");


exports.postStatement = ((req, res) => {
  const data = req.body;

  queries.postStatement(data, (error, result) => {
    if (error) {
      res.render("error");
    } else {
      res.render("home");
    }
  });
});