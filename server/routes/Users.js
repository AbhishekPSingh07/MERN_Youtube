import express from 'express';
import {update,deleteUser,getUser,subscribe,unsubscribe,like,dislike} from "../controllers/User.js"
import { verifyTokens } from '../verifyToken.js';

const router = express.Router();

//Update User
router.put("/:id",verifyTokens,update);

//Delete User
router.delete("/:id",verifyTokens,deleteUser);

//get a User
router.get("/find/:id",getUser);

//Subscribe a user
router.put("/sub/:id",verifyTokens,subscribe);


//Unsubscribe a user
router.put("/unsub/:id",verifyTokens,unsubscribe);

//like a Video
router.put("/like/:id",verifyTokens,like);

//dislike a video
router.put("/dislike/:id",verifyTokens,dislike);

//add a comment to a video

export default router;