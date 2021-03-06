const User = require('./models/user.model');
const bcrypt = require('bcryptjs');
// const keys = require('./keys')

// LOCAL //
// const localStrategy = require('passport-local');

// GOOGLE //
const GoogleStrategy = require('passport-google-oauth').OAuthStrategy

// LOCAL //
// module.exports = function(passport) {
//     passport.use(
//         new localStrategy((username, password, done) => {
//             User.findOne({username: username}, (err, user) => {
//                 if(err) throw err;
//                 if(!user) return done(null, false);
//                 bcrypt.compare(password, user.password, (err, result) => {
//                     if(err) throw err;
//                     if(result === true) {
//                         return done(null, user);
//                     } else {
//                         return done(null, false);
//                     }
//                 })
//             })
//         })
//     )

//     passport.serializeUser((user, cb) => {
//         cb(null, user.id);
//     })
//     passport.deserializeUser((id, cb) => {
//         User.findOne({_id: id}, (err, user) => {
//             cb(err, user);
//         })
//     })
// } 

// GOOGLE //
// module.exports = function(passport) {
//     passport.use(new GoogleStrategy({
//         consumerKey: keys.google.clientId,
//         consumerSecret: keys.google.clientSecret,
//         callbackURL: "http://localhost.com/users/auth/google/callback"
//       },
//       function(token, tokenSecret, profile, done) {
//           User.findOrCreate({ googleId: profile.id }, function (err, user) {
//             return done(err, user);
//           });
//       }
//     ));
// }