const express=require('express'); //requiring the npm module itself
require('./services/passport');
 
const app=express(); //create an express application, called 'app'
require('./routes/authRoutes')(app);

//local host is https://thelivelyroom-ziya42005.c9users.io:8080
//authentication https://thelivelyroom-ziya42005.c9users.io:8080/auth/google/callback

//figure out server for Thelivelyroom.com-no more local hosting

app.listen(process.env.PORT);


    
    
    



