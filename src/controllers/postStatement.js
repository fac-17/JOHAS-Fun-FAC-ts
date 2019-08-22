const queries = require("../model/queries/queries");


exports.postStatement = ((req, res) => {

  console.log('submit request = ', req);

  const data = req.body;

  queries.postStatement(data, (error, result) => {
    if (error) {
      console.log("i am err", error);
    } else {
      console.log("i am the result", result);
    }
  })
  // .then(result) => {
  //   res.send('tst')
  // }
})