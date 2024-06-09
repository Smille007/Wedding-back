// const app = require("./app");
// require('dotenv').config();



// const PORT = process.env.PORT || 4005;


// app.listen(PORT, () => {
//   console.log(`Listening on port ${PORT}`);
// });
require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

// Test the database connection
pool.connect((err, client, release) => {
  if (err) {
    console.error('Error connecting to the database:', err.message);
  } else {
    console.log('Connected to the database successfully!');
  }
  release(); // Release the client back to the pool
});

module.exports = pool;

