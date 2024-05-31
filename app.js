// DEPENDENCIES
const express = require("express");
const cors = require("cors");
const rsvpController = require('./controllers/rsvpController');

// CONFIGURATION
require("dotenv").config();
const app = express();

const corsOptions = {
    origin: 'http://localhost:3001', // Replace with your frontend URL
    optionsSuccessStatus: 200 // Some legacy browsers choke on 204
};

// MIDDLEWARE
app.use(cors(corsOptions)); // Apply custom CORS options
app.use(express.json());

// ROUTES
app.use('/rsvp', rsvpController);

app.get("/", (req, res) => {
    res.json("Welcome to Daryna's wedding website");
});

module.exports = app;
