const pgp = require('pg-promise')()
require('dotenv').config()

console.log('PG_USER:', process.env.PG_USER)
console.log('PG_HOST:', process.env.PG_HOST)

const cn = {
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    ssl: { rejectUnauthorized: false } 
}
console.log('Connection object:', cn)
const db = pgp(cn)

module.exports = db