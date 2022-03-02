const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
app.set('port', process.env.PORT || 8000 )


//==================================
//MIDDLEWARE
//==================================


app.use(express.json())
app.use(express.urlencoded({ extended: true }))


//==================================
//ROUTES
//==================================

app.get('/', (req, res) => {
    res.send('hello world')
    // res.redirect('/home')
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