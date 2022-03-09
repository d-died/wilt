
const express = require('express')
const { models } = require('../db/connection')
const router = express.Router()
const db = require('../db/connection')
const Posts = require('../models/Posts')
// const Post = db.post

//GET all posts
// exports.index = ( req, res, next ) => {
//     Post.find()
// }
router.get('/', (req, res) => {

    
    Posts.findAll()
    .then(posts => res.json(posts))
    .catch(err => console.log(err))
        // res.sendStatus(200)

})

//GET ONE SINGLE
router.get('/:id', (req, res) => {
    const id = req.params.id
    let sql = 'SELECT * FROM posts WHERE id=' + req.params.id
    Posts.findAll({
        where: {
            id: req.params.id
        }
    })
        .then(post => res.json(post))
        .catch(err => console.log(err))
})
    
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

// CREATE/POST posts
router.post('/', (req, res) => {
    Posts.create({
        title: req.body.title,
        description: req.body.description,
        upvotes: req.body.upvotes
    })
        .then((post) => res.json(post))
        .catch(err => console.log(err, 'theres an error'))
})
// router.post('/add', (req, res) => {

//     // const data = {
//     //     title: 'bing bing', 
//     //     description: 'bing bongo radda radda',
//     //     upvotes: 234342,
//     // }

//     // let { title, description, upvotes } = data

//     db.query('INSERT INTO ')
//     Post.create({
//         title,
//         description,
//         upvotes
//     })
//     .then((post) => res.status(201).json(post))
//     .catch(err => console.log(err))
// })
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