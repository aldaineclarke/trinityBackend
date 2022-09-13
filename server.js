require("dotenv").config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = parseInt(process.env.PORT) || 8000;
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());


app.listen(PORT, (error)=>{
    if(error) throw error;
    console.log('listening on port '+ PORT);
});


mongoose.connect(process.env.DB_URL,{}, (error)=>{
    if(error) throw error;
    console.log("Database connected");
})


