const express = require("express");
const cors = require("cors");
const app = express();
const rsvpController = require('./controllers/rsvpController');
const db = require('./db/dbConfig'); // Import database configuration

app.use(cors());
app.use(express.json());
// Mount the rsvpController middleware under the /rsvp path
app.use('/', rsvpController);
//ddd

// Test the database connection
db.connect()
  .then(() => {
    console.log('Connected to database successfully!');
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });

app.get("/", (req, res) => {
    res.json("Welcome to Daryna's wedding website");
});

module.exports = app;
