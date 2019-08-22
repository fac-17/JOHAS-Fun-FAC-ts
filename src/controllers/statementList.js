const {
  getData
} = require('../model/queries/queries');


exports.statements = (req, res) => {
  getData((err, statements) => {
    if (err) {
      res.render('error', {
        statusCode: 500,
        errorMessage: "DB error"
      });
    } else {
      res.render('game', {
        statements
      });
    }
  })
};