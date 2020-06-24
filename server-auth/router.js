const passport = require('passport')
const passportService = require('./services/passport')
const Authentication = require('./controllers/authentication')

// By default passport wants to make cookie based session for specific request
const requireAuth = passport.authenticate('jwt', { session: false})
const requireSignin = passport.authenticate('local', { session: false})

const log = (req, res, next)  => {
    console.log('Trying to sign in')
    next()
}

module.exports = (app) => {
    app.get('/', requireAuth, (req, res) => {
        res.send({ hi: 'there'})
    })
    app.post('/signup', Authentication.signup)
    app.post('/signin', log, requireSignin, Authentication.signin)
}