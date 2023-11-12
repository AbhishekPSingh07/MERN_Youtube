import express from 'express';
import { addComment, deleteComment, getComment } from '../controllers/Comment.js';
import { verifyTokens } from '../verifyToken.js';

const router = express.Router();

//Add a Comment
router.post("/",verifyTokens,addComment)

//Delete a Comment
router.delete("/:id",verifyTokens,deleteComment)

//Get a comment
router.get("/:videoId",verifyTokens,getComment)


export default router;