BEGIN;

DROP TABLE IF EXISTS facts CASCADE;

CREATE TABLE facts (
  id SERIAL PRIMARY KEY,
  author VARCHAR(30) NOT NULL,
  statement VARCHAR(280) NOT NULL,
  answer BOOLEAN
);

<<<<<<< HEAD
INSERT INTO facts VALUES ( 'sarah', 'I had a sixth finger', false);
=======

INSERT INTO facts (author, statement, answer) VALUES ( 'sarah', 'I had a sixth finger', false);
>>>>>>> fc7195a0d640639acc84b6467235c9f0eb12e05c

COMMIT;
