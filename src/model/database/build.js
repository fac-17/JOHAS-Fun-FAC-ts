const fs = require("fs");
const connection = require("./connection");
const sql = fs.readFileSync(`${__dirname}/build.sql`).toString();

const buildDatabase = cb => {
  connection.query(sql, cb);
};

// const runDbBuild = cb => {
//   dbConnection.query(sql, cb);
// };

buildDatabase();

module.exports = buildDatabase;
