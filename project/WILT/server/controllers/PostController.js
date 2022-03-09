
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
    Posts.findAll({
        where: {
            id:  id 
        }
    })
        .then(post => res.json(post))
        .catch(err => console.log(err))
})

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


//DELETE/DESTROY post
router.delete('/:id', ( req, res ) => {
    const id = req.params.id
    Posts.destroy({
        where: {
            id: req.params.id
        }
    })
    .then((posts) => res.json(posts))
    .then(err => console.log(err))
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