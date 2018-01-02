
const passport=require('passport'); //requiring the npm module itself
const GoogleStrategy=require('passport-google-oauth20').Strategy;
const keys=require('../config/keys'); //up one directory into the server folder...
 
 
passport.use(new GoogleStrategy ( {
    
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback' 
},

(accessToken, refreshToken, profile, done) => {

console.log('Access Token:', accessToken);
console.log('Referesh token', refreshToken);
console.log('Profile', profile);

}
));