

const express=require('express'); //bring in express modules as a dependdencies for this app
const passport=require('passport');
const GoogleStrategy=require('passport-google-oauth20').Strategy;
const keys=require('./config/keys.js');
 
const app=express(); //create an express application, called 'app'


passport.use(new GoogleStrategy ( {
    
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback' 
},
    
    
    
(accessToken, refreshToken, profile, done) => {
    
    console.log('The Access Token is:',  accessToken);
    console.log('The Refresh Token is:', refreshToken);
    console.log('The Profile Info is:',  profile);
})

);


app.get('/auth/google/callback', passport.authenticate ('google', 
{
    
    scope: ['profile', 'email']
})

);

app.get('/auth/google/callback', passport.authenticate('google'));

//local host is https://thelivelyroom-ziya42005.c9users.io:8080
//authentication https://thelivelyroom-ziya42005.c9users.io:8080/auth/google/callback

//figure out server for Thelivelyroom.com-no more local hosting

app.listen(process.env.PORT);


    
    
    



