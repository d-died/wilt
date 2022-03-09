const { Sequelize } = require('@sequelize/core')
require('dotenv').config()
const sequelize = new Sequelize('wilt', 'root', process.env.DB_ACCESS_KEY, {
    host: 'localhost',
    dialect: 'mysql'
})

const Post = sequelize.define('Post', {
    title: String, 
    description: String
})

console.log(Post === sequelize.models.Post)