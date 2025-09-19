require("dotenv").config();

const express = require("express");
const path = require("path");
const app = express();

const passport = require("passport");
const localstatergy = require("passport-local").Strategy;

const mongoose = require("mongoose");
const User = require("./Model/user.js");
const port = 8056;
const userRoutes=require("./Routes/user.js")
const session = require("express-session");
const flash=require("express-flash");

app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"View"));
app.use(express.static(path.join(__dirname, "PUBLIC")));
app.use(express.urlencoded({ extended: true }));


main().
    then(() => {
        console.log("sucessful connection");
    }).catch((err) => {
        console.log(err);
    })
async function main() {
    await mongoose.connect(process.env.MONGO_URL,{
       useNewUrlParser: true,
        useUnifiedTopology: true,
    });

}

const sessionOption = ({
    secret: "musecretcode",
    resave: false,
    saveUninitialized: true,
})
app.use(session(sessionOption));
app.use(flash());


app.use(passport.initialize());
app.use(passport.session());
passport.use(new localstatergy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser())

app.use("/",userRoutes);

app.listen(port,(req,res)=>{
    console.log(`server working on ${port}`);
})