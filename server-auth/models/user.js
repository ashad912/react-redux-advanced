const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema

const UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        minlength: 3
    }
})


UserSchema.pre('save', async function(next){
    const user = this

    const salt = await bcrypt.genSalt(8)

    user.password = await bcrypt.hash(user.password, salt)

    next()
})

UserSchema.methods.comparePassword = function (candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password)
}

const Model = mongoose.model('user', UserSchema)

module.exports = Model