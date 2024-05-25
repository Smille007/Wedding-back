// DEPENDENCIES
const express = require("express");
const cors = require("cors");
const rsvpController = require('./controllers/rsvpController');

// CONFIGURATION
require("dotenv").config();
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES
app.use('/rsvp', rsvpController);

app.get("/", (req, res) => {
    res.json("Welcome to Daryna's wedding website");
});

module.exports = app;
