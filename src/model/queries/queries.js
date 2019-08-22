const connection = require("../database/connection");

const getData = cb => {
  connection.query("SELECT * FROM facts", (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res.rows);
    }
  });
};

module.exports = { getData };
