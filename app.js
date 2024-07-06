require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 4005;
const rsvpController = require('./controllers/rsvpController');

// Middleware
app.use(cors());
app.use(express.json());

// Mount the rsvpController middleware under the /rsvp path
app.use('/', rsvpController);

// Route for the homepage
app.get("/", (req, res) => {
    res.json("Welcome to Daryna's wedding website");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
