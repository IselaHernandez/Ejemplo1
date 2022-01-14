const express=require('express');
const session=require('express-session');
const passport=require('passport');
const GoogleStrategy=require('passport-google-oauth20');
const path=require('path');

const app=express();


app.use(session({
    secret:"sdfsdjfbskdjrh",
    resave:true,
    saveUninitialized:true
}));

app.use(passport.initialize());
app.use(passport.session());
app.use('/web',express.static(path.join(__dirname,'web')))



//API KEY:  AIzaSyBMnzxkV0GPHMCvFdZwvzOd9TzEFkFytjw

//ID CLIENTE //  569136878569-015e6jc9nchjhmq1pvgblc456qdnr3vq.apps.googleusercontent.com/////
////////SECRETO////////////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//////////////////////////////


passport.use(new GoogleStrategy({
    clientID:'416520683840-jlvo2k92ns5anvjt9rrelcjk6mbngl68.apps.googleusercontent.com',
    clientSecret:'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',
    callbackURL:'http://localhost:3001/google/callback'
},
(accesToken,refreshToken,profile,cb)=>{
var user={
    accesToken,
    refreshToken,
    profile
}
return cb(null,user);
}
));
///////////////////////

passport.serializeUser((user,done)=>{
done(null,user);
});
passport.deserializeUser((user,done)=>{
    done(null,user);
    });


app.set ('view engine','ejs');

app.get('/', (req,res)=>{
    res.render('index')
});

app.get('/login',passport.authenticate('google',{scope:['profile']}));
app.get('/google/callback',(req,res)=>{
res.send('Logueado con Google');
});


///// RUTA MAPA BASICO/////
app.get('/mapaBasico', (req,res)=>{
    res.render('mapaBasico')
});


///// RUTA MAPA Geolocalizacion/////
app.get('/mapaGeo', (req,res)=>{
    res.render('mapaGeolocal')
});

app.listen(3001,()=>{
    console.log("Servidor en el puerto 3001");
})