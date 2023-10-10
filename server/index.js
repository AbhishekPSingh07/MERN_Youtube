import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import userRoutes from "./routes/Users.js"
import videoRoutes from "./routes/Videos.js"
import commentRoutes from "./routes/Comments.js"
import authRoutes from "./routes/Auth.js"
import cookieParser from "cookie-parser";

const app = express();
dotenv.config()

const connect =() =>(
    mongoose
    .connect(process.env.MONGO)
    .then(() =>{
        console.log("Connected to DB")
    })
    .catch((err)=>{
        console.log(err);
    })
)
//to Allow Input from external JSON files
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth",authRoutes)
app.use("/api/users",userRoutes)
app.use("/api/videos",videoRoutes)
app.use("/api/comments",commentRoutes)

// For Handling of Error
app.use((err,req,res,next)=>{
    const status = err.status || 500;
    const message = err.message || "Something Went wrong";
    return res.status(status).json({
        success:false,
        message,
        status
    });
})

app.listen(8800,()=>{
    connect();
    console.log("Connected to Server");
})