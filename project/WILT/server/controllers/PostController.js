const express = require('express')
const router = express.Router()
const db = require('../db/connection')
const Post = require('../models/Posts')

//GET all posts
router.get('/', (req, res) => {
    Post.findAll()
    .then(posts => {
        console.log(posts)
        res.sendStatus(200)
    })
    .catch(err => console.log(err))
    // db.query('SELECT * from posts', (err, rows) => {
    //     if(!err) {
    //         res.send(rows)
    //     } else {
    //         console.log(err)
    //     }
    // })
    // postMessage.find()
    // .then((posts) => res.json(posts))
    // .catch(next)
})

// CREATE/POST posts
router.get('/add', (req, res) => {
    const data = {
        title: 'hello', 
        description: 'radda radda',
        upvotes: 69,
    }

    let { title, description, upvotes } = data

    Post.create({
        title,
        description,
        upvotes
    })
    .then(post => res.redirect('/posts'))
    .catch(err => console.log(err))
})
// router.post('/posts', (req, res) => {
//     const sql = "INSERT INTO posts (title, description) VALUES (?, ?)"
//     db.query(sql, {
//         title: req.body.title,
//         description: req.body.description
//     })
//     .then(newPost => res.send(newPost))
//     // db.posts.query(sql, [ title, description ], (err, rows) => {
//     //     if (err) throw err
//     //     res.send(rows)
//     // })
// })

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





module.exports = router