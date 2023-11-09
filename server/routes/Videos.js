import express from 'express';
import { addVideo, addViews, deleteVideo, getVideo, randomVideos, subVideos, trendVideos, updateVideo } from '../controllers/Video.js';
import { verifyTokens } from '../verifyToken.js';

const router = express.Router();

//create a video
router.post("/",verifyTokens,addVideo)

//update the video
router.put("/:id",verifyTokens,updateVideo)

//delete a video
router.delete("/:id",verifyTokens,deleteVideo)

//Get a video
router.post("/find/:id",getVideo)

//increase the view for video
router.put("/view/:id",addViews)

//To get trend Video
router.get("/trend",trendVideos)


//Random videos
router.get("/random",randomVideos)

//Subscribed channel videos
router.get("/sub",verifyTokens,subVideos)


export default router;