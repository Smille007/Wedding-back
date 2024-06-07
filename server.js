const app = require("./app");
require('dotenv').config();


// CONFIGURATION
const PORT = process.env.PORT || 4005;

// LISTEN
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
