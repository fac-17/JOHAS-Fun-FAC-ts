BEGIN

DROP TABLE IF EXISTS facts CASCADE;

CREATE TABLE facts (
  id INT,
  author VARCHAR(30),
  statement VARCHAR(280),
  answer BOOLEAN
);

INSERT INTO facts VALUES (1, 'sarah', 'I had a third nipple', false)

COMMIT;
