const express = require('express');
require("dotenv").config()
const rsvp = express.Router()
const { getRsvp, getOneRsvp, postRsvp } = require('../queries/rsvp')

// GET all RSVPs
rsvp.get('/rsvp', async (req, res) => {
    try {
        // Fetch rsvp_id from query params or use undefined
        const rsvp_id = req.query.rsvp_id;
        const rsvps = await getRsvp(rsvp_id);
        res.status(200).json({ data: rsvps });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// GET a single RSVP by ID
rsvp.get("/:id", async (req, res) => {
    const id = req.params.id;
    const oneRsvp = await getOneRsvp(id);
    if (oneRsvp) {
        res.status(200).json(oneRsvp);
    } else {
        res.status(404).json({ error: "RSVP not found" });
    }
});

// POST a new RSVP
rsvp.post('/rsvp', async (req, res) => {
    try {
        // Validate and sanitize req.body here before using it in postRsvp
        const createRsvp = await postRsvp(req.body);
        res.status(201).json({ data: createRsvp });
    } catch (err) {
        res.status(500).json({ error: "Invalid Information", info: err.message });
    }
});

module.exports = rsvp;
