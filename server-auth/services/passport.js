const passport = require('passport')
const User = require('../models/user')
const config = require('../config')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const LocalStrategy = require('passport-local')

// Create local strategy

// Look at request email field
const localOptions = { usernameField: 'email'}
const localLogin = new LocalStrategy(localOptions, async (email, password, done) => {
    // Verify this email and password, call done with the user
    // if if is the correct email and password
    // otherwise, call done with false
    
    try{
        const user = await User.findOne({email})
        
        if(!user){
            return done(null, false)
        }

        const isMatch = await user.comparePassword(password)

        if(!isMatch) {
            return done(null, false)
        }
        
        return done(null, user)

    } catch(e) {
        return done(e)
    }


})

// passport.serializeUser(function(user, done) {
//     done(null, user);
// });
  
// passport.deserializeUser(function(user, done) {
//     done(null, user);
// });



// Setup options for JWT Strategy
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: config.secret
}

// Create JWT strategy

const jwtLogin = new JwtStrategy(jwtOptions, async (payload, done) => {
    // Payload is decoded jwt-token
    // See of the user ID in the payload exists in our db
    // If it does, call 'done' with that other
    // otherwise, call done without a user object
    try{
        const user = await User.findById(payload.sub)
        
        if(user){
            return done(null, user)
        }

        done(null, false)
    }catch(e){
        return done(e, false)
    }
})

// Tell passport to use this strategy

passport.use(jwtLogin)
passport.use(localLogin)