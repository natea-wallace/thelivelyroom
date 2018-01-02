const passport=require('passport'); //from the npm modules

module.exports = (app) =>
{
app.get('/auth/google', passport.authenticate ('google', 
{
    
    scope: ['profile', 'email']
})

);

app.get('/auth/google/callback', passport.authenticate('google'));
};