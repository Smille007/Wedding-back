// const app = require("./app");
// require('dotenv').config();



// const PORT = process.env.PORT || 4005;


// app.listen(PORT, () => {
//   console.log(`Listening on port ${PORT}`);
// });
const app = require('./app')
require('dotenv').config()

const PORT = process.env.DATABASE_URL

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})


