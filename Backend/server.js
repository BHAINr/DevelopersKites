const cors = require('cors');
const express=  require('express');
const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");


dotenv.config({path:"Backend/config/config.env"});
//database connect 
const corsOptions = {
    origin: '*',  // Replace with your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization','Access-Control-Allow-Origin'],

  };


app.use(cors(corsOptions));
app.use(express.json());
connectDatabase();

app.listen(process.env.PORT, ()=>{
    console.log(`server is working on http://localhost:${process.env.PORT}`)
})