BEGIN;

DROP TABLE IF EXISTS facts CASCADE;

CREATE TABLE facts (
  id SERIAL PRIMARY KEY,
  author VARCHAR(30) NOT NULL,
  statement VARCHAR(280) NOT NULL,
  answer BOOLEAN
);


INSERT INTO facts (author, statement, answer) VALUES ( 'Sarah', 'I had a sixth finger', false), ( 'Tony', 'I have Heterochromia', false), ('Martha', 'I have Tryphobia', true), ('Sam', 'I was arrested in Paraguay', true), ('Colette', 'I once had dinner with Cher', false), ('Colette', 'I can"t swim', true), ('Sarah', 'I can"t ride a bike', false);

COMMIT;
