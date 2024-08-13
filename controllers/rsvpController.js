const express = require('express');
const rsvp = express.Router();
const { getRsvp, getOneRsvp, postRsvp } = require('../queries/rsvp');
const { checkFullName, checkEmail, checkGuests } = require('../validations/checkRSVP');

rsvp.get('/', async (req, res) => {
    try {
        const rsvps = await getRsvp();
        res.status(200).json(rsvps);
    } catch (err) {
        res.status(500).json({ error: "Error fetching rsvps", message: err.message });
    }
});

// GET a single RSVP by ID
rsvp.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const oneRsvp = await getOneRsvp(id);
        if (oneRsvp) {
            res.status(200).json(oneRsvp);
        } else {
            res.status(404).json({ error: "RSVP not found" });
        }
    } catch (err) {
        res.status(500).json({ error: "Error fetching RSVP", message: err.message });
    }
});

// POST a new RSVP
rsvp.post('/', checkFullName, checkEmail, checkGuests, async (req, res) => { 
    try {
        const createRsvp = await postRsvp(req.body);
        res.status(201).json({ data: createRsvp });
    } catch (err) {
        if (err.message === 'All fields are required') {
            res.status(400).json({ error: "Invalid Information", info: err.message });
        } else {
            res.status(500).json({ error: "Server Error", info: err.message });
        }
    }
});

module.exports = rsvp;