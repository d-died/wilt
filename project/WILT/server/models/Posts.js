const { Sequelize } = require('@sequelize/core')
require('dotenv').config()
const db = require('../db/connection')

const Post = db.define('posts', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    title: Sequelize.STRING, 
    description: Sequelize.TEXT,
    upvotes: Sequelize.INTEGER,
    createdAt: { 
        type: Sequelize.DATE, 
        defaultValue: Sequelize.NOW
    },
    updatedAt: { 
        type: Sequelize.DATE, 
        defaultValue: Sequelize.NOW
    }
})

// console.log(Post === sequelize.models.Post)

module.exports = Post