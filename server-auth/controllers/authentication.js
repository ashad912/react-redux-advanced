const jwt = require('jwt-simple')
const User = require('../models/user')

const config = require('../config')

const tokenForUser = (user) => {
    // sub as subject - who is the token about
    const timestamp = new Date().getTime()
    return jwt.encode({ sub: user._id, iat: timestamp }, config.secret)
}


exports.signup = async (req, res, next) => {
    const email = req.body.email
    const password = req.body.password

    if (!email || !password) {
        res.status(422).send({ error: 'You must provide email and error' })
    }

    try {
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(422).send({ error: 'Email is in use' })
        }
    } catch (e) {
        return next(e)
    }



    const user = new User({
        email,
        password
    })

    await user.save()

    res.send({token: tokenForUser(user)})
}


exports.signin = async (req, res, next) => {
    // User has already had his email and password auth'd
    // We jesu need to give him a token 

    res.send({token: tokenForUser(req.user)})

}