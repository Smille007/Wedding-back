const express = require('express');
require("dotenv").config()
const rsvp = express.Router()
const { getRsvp, getOneRsvp, postRsvp } = require('../queries/rsvp')

rsvp.get('/', async (req, res) => {
    try {
        const rsvps = await getRsvp();
        res.status(200).json(rsvps);
    } catch (err) {
        res.status(500).json({ error: "Error fetching rsvps", message: err.message });
    }
});


// GET a single RSVP by ID
rsvp.get("/:id", async (req, res) => {
    const id = req.params.id;
    const oneRsvp = await getOneRsvp(id);
    if (oneRsvp) {
        res.status(200).json(oneRsvp);
    } else {
        res.status(404).json({ error: "rsvp not found" });
    }
});

// POST a new RSVP
rsvp.post('/', async (req, res) => {
    try {
        // Validate and sanitize req.body here before using it in postRsvp
        const createRsvp = await postRsvp(req.body);
        res.status(201).json({ data: createRsvp });
    } catch (err) {
        res.status(500).json({ error: "Invalid Information", info: err.message });
    }
});

module.exports = rsvp;
