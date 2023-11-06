import jwt from "jsonwebtoken"
import { createError } from "./error.js"
import { raw } from "express"

export const verifyTokens = (req,res,next)=>{
    const token = req.cookies.access_token
    if(!token) return next(createError(401,"You are not Authenticated"));
    jwt.verify(token,process.env.JWT,(err,user)=>{
        if(err) return next(createError(403,"Token is not Valid"));
        req.user = user;
        next()
    })
}