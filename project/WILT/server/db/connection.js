
const mysql = require('mysql')
require('dotenv').config()

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    // password: 'MusicAnus19!',
    password: process.env.DB_ACCESS_KEY,
    database: 'wilt'
})


module.exports = db