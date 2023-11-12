import { createError } from '../error.js'
import Comments from '../models/Comments.js'
import Comment from '../models/Comments.js'
import Video from '../models/Video.js'

//get a Comment
export const getComment = async(req,res,next)=>{
    try{
        const comments = await Comments.find({videoId:req.params.videoId})
        res.status(200).json(comments)
    }catch(err){
        next(err)
    }

}

export const deleteComment = async(req,res,next)=>{
    try{
        const comment = await Comment.findById(req.params.id)
        const video = await Video.findById(req.params.id)
        if(req.user.id === comment.userId || req.user.id === video.userId){
            await Comment.findByIdAndDelete(req.params.id)
            res.status(200).send("Comment has been deleted successfully")
        }else{
            next(createError(403,"Cannot delete Comment of another user"))
        }
    }catch(err){
        next(err)
    }
}

export const addComment = async(req,res,next)=>{
    const comment = new Comment({userId: req.user.id,...req.body})
    try{
        const savedComment = await comment.save()
        res.status(200).send(savedComment)
    }catch(err){
        next(err);
    }
}
