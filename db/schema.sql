DROP DATABASE IF EXISTS wedding;
CREATE DATABASE wedding;
\c wedding

CREATE TABLE rsvp (
  rsvp_id SERIAL PRIMARY KEY,
  fullName VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  guests INTEGER,
  msg VARCHAR(300) NOT NULL
);
