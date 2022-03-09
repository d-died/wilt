const express = require('express')
const router = express.Router()
const db = require('../db/connection')
// const Posts = require('../tables/Posts')

//GET all posts
router.get('/posts', (req, res) => {
    db.query('SELECT * from posts', (err, rows, fields) => {
        if(!err) {
            res.send(rows)
        } else {
            console.log(err)
        }
    })
    // postMessage.find()
    // .then((posts) => res.json(posts))
    // .catch(next)
})

// GET by ID
// router.get('/posts', (req, res, next) => {
//     // if (err) throw err
//     const id = req.params.id
//     db.query("SELECT * FROM posts WHERE id='1'", (err, rows, fields) => {
//         if(!err) {
//             res.send(rows)
//         } else {
//             console.log(err)
//         }
//     })
// })


// CREATE/POST posts
router.post('/posts', (req, res) => {
    const postData = ['bing bong', 'choo choo train']
    db.query('INSERT INTO posts SET ?', postData, (err, rows) => {
        if (err) throw err
        res.send(rows)
    })
})


module.exports = router