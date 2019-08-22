const fs = require("fs");
const connection = require("./connection");
const sql = fs.readFileSync(`${__dirname}/build.sql`).toString();

const buildDatabase = () => {
  connection.query(sql, (err, res) => {
    if (err) {
      console.log(err, "error");
    } else {
      //console.log(res.message);
    }
  });
};

buildDatabase();

module.exports = buildDatabase;
