import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
// import userRoutes from '/routes/user.route.js';
import router from "./routes/user.route.js";

dotenv.config();

mongoose

.connect('mongodb+srv://hirunikodisinghe:Batman123@expensetracking.apkwkj3.mongodb.net/?retryWrites=true&w=majority&appName=expensetracking')
.then(() => { 
    console.log("MongoDb is connected");
 })

 .catch((err) =>{
    console.log(err);
 });

const app = express();
    
app.listen(3001, () =>{
    console.log("Server is running on port 3001");
});


app.get('/test', (req, res) =>{
    res.json({ message: 'API is working!' });
});
  