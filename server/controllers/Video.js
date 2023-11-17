import { createError } from "../error.js";
import Video from "../models/Video.js"
import User from "../models/Users.js"

//add Video
export const addVideo = async(req,res,next) => {
    const newVideo = new Video({userId:req.user.id,...req.body});
    try{
        const savedVideo = await newVideo.save()
        res.status(200).json(savedVideo)
    }catch(err){
        next(err);
    }
}

//update Video
export const updateVideo = async(req,res,next) => {
    try{
        const video = await Video.findById(req.params.id)
        if(!video) return next(createError(404,"Video not Found"))
        if(req.user.id === video.userId){
            const updatedVideo = await Video.findByIdAndUpdate(req.params.id,
                {
                $set : req.body
                },
                {new: true}
            )
            res.status(200).json(updatedVideo)
        }else{
            next(createError(403,"You can Only update your video"))
        }
    }catch(err){
        next(err);
    }
}

//getVideo
export const getVideo = async(req,res,next) => {
    try{
        const video = await Video.findById(req.params.id)
        if(!video) return next(createError(404,"Video not Found"))
        res.status(200).json(video)
    }catch(err){
        next(err);
    }

}

//delete Video
export const deleteVideo = async(req,res,next) => {
    try{
        const video = await Video.findById(req.params.id)
        if(!video) return next(createError(404,"Video not Found"))
        if(req.user.id === video.userId){
            await Video.findByIdAndDelete(req.params.id)
            res.status(200).json("Video Deleted")
        }else{
            next(createError(403,"You can Only delete your video"))
        }
    }catch(err){
        next(err);
    }
}

//Add Views
export const addViews = async(req,res,next) => {
    try{
        const video = await Video.findByIdAndUpdate(req.params.id,{
            $inc: {videoView:1}
        })
        if(!video) return next(createError(404,"Video not Found"))
        res.status(200).json("Views has been increased")
    }catch(err){
        next(err);
    }
}

//Random Video selection
export const randomVideos = async(req,res,next) => {
    try{
        const videos = await Video.aggregate([{$sample: {size:40}}]) // aggregate([{$sample]) -> returns a random sample and size represents no pf samples therefore 40 random videos.
        res.status(200).json(videos)
    }catch(err){
        next(err);
    }
}

//Subscribed Channels videos
export const subVideos = async(req,res,next) => {
    try{
        const user = await User.findById(req.user.id)
        const subbedChannels = user.subscribedUsers
        const list = await Promise.all(
            subbedChannels.map((channelId)=>{
                return Video.find({userId:channelId})
            })
        )
        res.status(200).json(list.flat().sort((a,b)=>b.createdAt- a.createdAt)) //.flat() -> To avoid nesting of the response json
    }catch(err){
        next(err);
    }
}

//Trending Videos
export const trendVideos = async(req,res,next) => {
    try{
        const videos = await Video.find().sort({videoViews:-1}) //find method just return things in sorted manner so therefore sort to get the highest viewed videos first (-1) and 1 for ascending order.
        res.status(200).json(videos)
    }catch(err){
        next(err);
    }
}
//To get Video by Tag
export const getByTag = async( req,res,next)=>{
    const tags = req.query.tags.split(",")
    console.log(tags);
    try{
        const video = await Video.find({tags: {$in:tags}}).limit(20)
        res.status(200).json(video)
    }catch(err){
        next(err);
    }
}

//Search method
export const search = async( req,res,next)=>{
    const query = req.query.q
    try{
        const video = await Video.find({title:{$regex : query, $options: "i"}}).limit(20) //regex is used for serch queries and option i denotes that that it should be case insensitive.
        res.status(200).json(video)
    }catch(err){
        next(err);
    }
}

