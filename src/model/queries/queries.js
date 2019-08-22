const connection = require('../');



const getData = () => {
  console.log("GEt data");
  connection.query('SELECT * FROM facts', (err, res) => {
    if(err) {
      cb(err)
    } else {
      cb(null, res.rows);
    };
  });
};





module.exports = {getData};
