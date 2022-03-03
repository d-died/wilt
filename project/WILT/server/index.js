const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
app.set('port', process.env.PORT || 8000 )
const db = require('./db/connection')



// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'password',
//     database: 'WILT'
// })

db.connect((err) => {
    if (err) throw err
    console.log('you are connected .......')
})

//==================================
//MIDDLEWARE
//==================================


app.use(express.json())
app.use(express.urlencoded({ extended: true }))


//==================================
//ROUTES
//==================================

app.get('/api', (req, res) => {
    
    db.query(wilt, err => {
        if (err) throw err
    })
    res.send('db connected')
})


//==================================
//CONTROLLERS
//==================================




//==================================
//START SERVER
//==================================

app.use(( err, req, res, next ) => {
    const statusCode = res.statusCode || 500
    const message = err.message || 'Internal Server Error'
    res.status(statusCode).send(message)
})

app.listen(app.get('port'), () => {
    console.log(`PORT: ${app.get('port')} CNXN YAS!`)
})