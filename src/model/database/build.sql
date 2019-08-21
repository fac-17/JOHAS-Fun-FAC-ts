BEGIN

DROP TABLE IF EXISTS facts CASCADE;

CREATE TABLE facts (
  ID INT,
  Author VARCHAR(30),
  Fact VARCHAR(280),
  Answer BOOLEAN
);



COMMIT;
