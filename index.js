//importing the dependencies
const express = require ("express");
const mongoose = require("mongoose");
const cors = require ("cors");
const dotenv = require("dotenv")
const app = express();
const config = require("./config/database")


//config dotenv: allows us to use the dotenv file
dotenv.config();

//middleware
//Helps to send a req on postman for example
app.use(express.json());

app.get ("/api", (req, res)=>{
 res.send("Endpoint works!")
})

//DB connection
config();

//listen to server
app.listen(3000, (req, res)=>{
    try{
        console.log("Server running on port 3000 Update ")
    }catch(err){console.log(err)}
})

