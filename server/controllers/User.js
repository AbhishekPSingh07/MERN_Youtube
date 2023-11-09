import { createError } from "../error.js";
import User from "../models/Users.js";

export const update =async (req,res,next) => {
    if(req.params.id === req.user.id){
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id,
                {
                    $set:req.body,
                },{new:true}
            );
            res.status(200).send(updatedUser)
        } catch (error) {
            
        }
    }else{
        return next(createError(403,"You Can only update Your Account"));
    }
}
export const deleteUser =async (req,res,next) => {
    if(req.params.id === req.user.id){
        try {
            await User.findByIdAndDelete(req.params.id)
            res.status(200).send("User has been deleted");
        } catch (error) {
            
        }
    }else{
        return next(createError(403,"You Can only delete Your Account"));
    }
}

export const getUser =async (req,res,next) => {
    try {
        const user = await User.findById(req.params.id)
        res.status(200).send(user)
    } catch (error) {
        return next(error);
    }
}

export const subscribe =async(req,res,next) => {
    try {
        try{
            await User.findByIdAndUpdate(req.user.id,{
                $push:{subscribedUsers:req.params.id}
            })
            await User.findByIdAndUpdate(req.params.id,{
                $inc:{subscribers:1}
            })
            res.status(200).send("Subscription Successfull")
        }catch(err){
            next(err)
        }
    } catch (error) {
        return next(error);
    }
}

export const unsubscribe =async(req,res,next) => {
    try {
        try{
            await User.findByIdAndUpdate(req.user.id,{
                $pull:{subscribedUsers:req.params.id}
            })
            await User.findByIdAndUpdate(req.params.id,{
                $inc:{subscribers:-1}
            })
            res.status(200).send("Unsubscription Successfull")
        }catch(err){
            next(err)
        }
    } catch (error) {
        return next(error);
    }
}

export const like =(req,res,next) => {
    try {
        
    } catch (error) {
        return next(error);
    }
}


export const dislike =(req,res,next) => {
    try {
        
    } catch (error) {
        return next(error);
    }
}



