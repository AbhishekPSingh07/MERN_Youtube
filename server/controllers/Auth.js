import mongoose from "mongoose"
import bcrypt from "bcrypt"
import User from "../models/Users.js"
import { createError } from "../error.js";
import jwt from "jsonwebtoken"


//Sign Up Function
export const signUp = async(req,res,next)=>{
    try{
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt)
        const newUser = new User({...req.body,password:hash});

        await newUser.save()
        res.status(200).send("User has been Created");
    }catch(err){
        next(err);
    }
}
//Sign In Function
export const signIn = async(req,res,next)=>{
    try{
        //Check if user is present in the mongoDb
        const user = await User.findOne({name:req.body.name});
        if(!user) return next(createError(404,"User Not Found"));
        //Check with the hashed password to verify
        const isCorrect = await bcrypt.compare(req.body.password,user.password);
        if(!isCorrect) return next(createError(400,"incorrect password"));

        const token = jwt.sign({id:user._id},process.env.JWT)
        const {password, ...others} = user._doc

        res.cookie("access_token",token,{
            httpOnly:true
        })
        .status(200)
        .json(others);
    }catch(err){
        next(err);
    }
}