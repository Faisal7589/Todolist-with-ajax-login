require('dotenv').config();
import express from "express";
import viewEngine from './config/viewEngine'
import initWebRoutes from './routes/web'
import connection from './config/connectDB'
import bodyParser from "body-parser"
import cookieParse from "cookie-parser"
import session from "express-session"
import passport from "passport"
import { finished } from "stream";

let app = express();

app.use(cookieParse("secret"))

//config session
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: false,
    cookie:{
        maxAge: 1000* 60 * 60 * 24 //1day
    }
}))


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

viewEngine(app);

//config passport middleware
app.use(passport.initialize())
app.use(passport.session())

initWebRoutes(app);

let port = process.env.PORT || 8080;

app.listen(port, ()=>{
    console.log(`http:///www.localhost:${port}`)
})





