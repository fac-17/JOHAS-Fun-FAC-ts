const queries = require("../model/queries/queries");

exports.formSubmit = ((req, res) => {
  console.log(req.doy);
  const data = req.body;

  queries.postStatement(data, (error, result) => {
    if (error) {
      res.render("error");
    } else {
      res.render("home");
    }
  });
});
