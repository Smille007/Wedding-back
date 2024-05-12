const db = require("../db/dbConfig");

const getRsvp = async () => {
    try {
       const rsvps = await db.any("SELECT * FROM rsvp");
       return rsvps;
    } catch (err) {
        throw new Error("Error fetching RSVPs");
    }
};

const getOneRsvp = async (rsvpId) => {
    try {
       const rsvp = await db.one("SELECT * FROM rsvp WHERE rsvp_id = $1", rsvpId);
       return rsvp;
    } catch (err) {
        throw new Error("Error fetching RSVP");
    }
};

const postRsvp = async (rsvpData) => {
    try {
        const { fullName, email, guests } = rsvpData;
        const newRsvp = await db.one("INSERT INTO rsvp (fullName, email, guests) VALUES ($1, $2, $3) RETURNING *", [fullName, email, guests]);
        return newRsvp;
    } catch (err) {
        throw new Error("Error creating RSVP");
    }
};

module.exports = { getRsvp, getOneRsvp, postRsvp };
