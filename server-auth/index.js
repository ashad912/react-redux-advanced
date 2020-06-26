const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
//const passport = require('passport')
const http = require('http')

const bodyParser = require('body-parser')
const morgan = require('morgan')

const router = require('./router')
const app = express()

mongoose.connect('mongodb://localhost:27017/rr-advanced',
     {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }
)

// app.use is express middleware - every incoming request passes through used middleware
// Morgan is logging framework for requests
app.use(morgan('combined'))
// app.use(passport.initialize());
// app.use(passport.session())
// app.use(cors())
app.use(bodyParser.json({ type: '*/*'}))
router(app)

// Server Setup
const port = process.env.PORT || 4000
const server = http.createServer(app)

server.listen(port)
console.log('Server listening on:', port)