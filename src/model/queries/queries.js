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

const postStatement = (data, cb) => {
  console.log("running post statement callback");
  const {
    name,
    statement,
    answer
  } = data

  connection.query(
    "INSERT INTO facts(author, statement, answer) VALUES($1,$2, $3)",
    [name, statement, answer],
    (err, res) => {
      if (err) {
        cb(err);
      } else {
        cb(null, res.rows);
      }
    }
  );
};

module.exports = {
  getData,
  postStatement
};