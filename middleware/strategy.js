const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Users = require('../models/users');

const verify = (username, password, done) => {
  Users.findOne({ username : username}).then(user => {console.log(user); return done(null, user)}).catch(e => {console.log (e); return done(e); });
}

const options = {
  usernameField: "username",
  passwordField: "password",
}

passport.use('local', new LocalStrategy(options, verify))

passport.serializeUser((user, cb) => {
  cb(null, user._id)
})

passport.deserializeUser( (id, cb) => {
  Users.findById(id,  (err, user) => {
    if (err) { return cb(err) }
    cb(null, user)
  })
})

module.exports = passport;