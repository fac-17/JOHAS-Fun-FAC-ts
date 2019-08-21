const fs = require('fs');
const connection = require('./connection');
const sql = fs.readFileSync(`${__dirname}/build.sql`).toString();

const buildDatabase = () => {
  connection.query(sql, (err, res) => {
    if(err) {
      console.log(err, 'error')
    } else {
      console.log('Database created')
      connection.end(() => {
        console.log('Connection closed')
      })
    }
  })
}

buildDatabase();

module.exports = buildDatabase;
