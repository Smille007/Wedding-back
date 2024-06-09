// const app = require("./app");
// require('dotenv').config();



// const PORT = process.env.PORT || 4005;


// app.listen(PORT, () => {
//   console.log(`Listening on port ${PORT}`);
// });
// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 4005; // Use the PORT environment variable or fallback to 4005
const rsvpController = require('./controllers/rsvpController');

// Middleware
app.use(cors());
app.use(express.json());

// Mount the rsvpController middleware under the /rsvp path
app.use('/rsvp', rsvpController);

// Route for the homepage
app.get("/", (req, res) => {
    res.json("Welcome to Daryna's wedding website");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;



