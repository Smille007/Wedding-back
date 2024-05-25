const db = require("../db/dbConfig");

const getRsvp = async () => {
    try {
        const rsvps = await db.any("SELECT * FROM rsvp");
        return rsvps;
    } catch (err) {
        console.error("Error fetching RSVPs:", err);
        throw new Error("Error fetching rsvp");
    }
};

const getOneRsvp = async (rsvpId) => {
    try {
        const rsvp = await db.one("SELECT * FROM rsvp WHERE rsvp_id = $1", rsvpId);
        return rsvp;
    } catch (err) {
        console.error("Error fetching RSVP:", err);
        throw new Error("Error fetching RSVP");
    }
};

const postRsvp = async (rsvpData) => {
    try {
        const { fullName, email, guests, msg } = rsvpData;
        if (!fullName || !email || !guests || !msg) {
            throw new Error("All fields are required");
        }
        const newRsvp = await db.one(
            "INSERT INTO rsvp (fullName, email, guests, msg) VALUES ($1, $2, $3, $4) RETURNING *", 
            [fullName, email, guests, msg]
        );
        return newRsvp;
    } catch (err) {
        console.error("Error creating RSVP:", err);
        throw new Error("Failed to create RSVP. Please try again later.");
    }
};

module.exports = { getRsvp, getOneRsvp, postRsvp };
