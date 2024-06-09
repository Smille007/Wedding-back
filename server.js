const app = require("./app");
require('dotenv').config();


// CONFIGURATION
const PORT = process.env.DATABASE_URL || 4005;


// LISTEN
app.listen(PORT, () => {
  console.log(`Listening on port ${DATABASE_URL}`);
});
