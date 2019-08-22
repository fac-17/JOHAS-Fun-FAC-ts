const test = require("tape");
const buildDatabase = require("../model/database/build");
const queries = require("../model/queries/queries");

test("Tape is working", t => {
  t.equal(1, 1, "1 equals 1");
  t.end();
});

test("Test that getData function returns info", t => {
  buildDatabase((err, res) => {
    t.error(err, 'No error');

    let expected = { id:1, author: 'sarah', statement:'I had a sixth finger', answer:false};

    queries.getData((err, result) => {
      if(err) console.log(err);
      t.deepEqual(result, expected, "returns info from database");
      t.end();
    })
  })
})