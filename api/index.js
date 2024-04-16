import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";

dotenv.config();

mongoose

.connect
    (process.env.MONGO)
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

/*mongodb+srv://hirunikodisinghe:KAhr@123@expensetracking.apkwkj3.mongodb.net/expensetracking?retryWrites=true&w=majority*/
/*mongodb+srv://hirunikodisinghe:<password>@expensetracking.apkwkj3.mongodb.net/?retryWrites=true&w=majority&appName=expensetracking
mongodb+srv://hirunikodisinghe:KAhr@123@expensetracking.apkwkj3.mongodb.net/expensetracking?retryWrites=true&w=majority*/

/*mongodb+srv://hirunikodisinghe:KAhr@123@expensetracking.apkwkj3.mongodb.net/expense?retryWrites=true&w=majority&appName=expensetracking*/
