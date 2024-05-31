const express = require("express");
const cors = require("cors");
const app = express();
const rsvpController = require('./controllers/rsvpController');

app.use(cors());
app.use(express.json());
// Mount the rsvpController middleware under the /rsvp path
app.use('/rsvp', rsvpController);



app.get("/", (req, res) => {
    res.json("Welcome to Daryna's wedding website");
});

module.exports = app;
