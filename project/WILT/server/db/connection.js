const mysql = require('mysql')
require('dotenv').config()

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.DB_ACCESS_KEY,
    database: 'wilt'
})

db.connect((err) => {
    if (!err) {
        console.log('CONNECTED!!')
    } else {
        console.log('Connection Failed womp!')
    }

    // let createPosts = CREATE TABLE if not exists `posts`(
    //     id int PRIMARY_KEY AUTO INCREMENT,
    //     title VARCHAR(150), 
    //     description VARCHAR(400),
    // )

    // db.query(createPosts, (err, res, fields) => {
    //     if (err) console.log(err.message)
    // })

    // db.end((err) => {
    //     if (err) return console.log(err.message)
    // })
})


module.exports = db