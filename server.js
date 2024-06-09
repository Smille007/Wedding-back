// const app = require("./app");
// require('dotenv').config();



// const PORT = process.env.PORT || 4005;


// app.listen(PORT, () => {
//   console.log(`Listening on port ${PORT}`);
// });
require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 4005; // Use the PORT environment variable or fallback to 4005

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



