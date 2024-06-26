// const pgp = require('pg-promise')()
// require('dotenv').config()

// const cn = {
//     host: process.env.PG_HOST,
//     port: process.env.PG_PORT,
//     database: process.env.PG_DATABASE,
//     user: process.env.PG_USER,
//     password: process.env.PG_PASSWORD
// }

// const db = pgp(cn)

// module.exports = db

const pgp = require('pg-promise')();
require('dotenv').config();

const db = pgp(process.env.DATABASE_URL);

// Test the database connection
db.connect()
  .then(() => {
    console.log('Connected to database successfully!');
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });

module.exports = db;

