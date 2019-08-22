const fs = require('fs');
const connection = require('./connection');
const sql = fs.readFileSync(`${__dirname}/build.sql`).toString();

const buildDatabase = () => {
  // console.log("hellooo");
  connection.query(sql, (err, res) => {
   if(err) {
     console.log(err, 'error')
  } else {
   // console.log('Database created')
   //  connection.end(() => {
   //    console.log('Connection closed')
   //   })
   console.log(res);
    }
   })
}

buildDatabase();

module.exports = buildDatabase;
