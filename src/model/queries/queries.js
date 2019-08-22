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

const postStatement = cb => {
  connection.query(
    "INSERT INTO facts(author, statement, answer) VALUES('Martha','I wear glasses', true)",
    (err, res) => {
      if (err) {
        cb(err);
      } else {
        cb(null, res.rows);
      }
    }
  );
};

module.exports = { getData, postStatement };
