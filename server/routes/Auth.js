import express from 'express';
import { signIn, signUp } from '../controllers/Auth.js';

const router = express.Router();

//Create a new User
router.post("/signup",signUp)

//Sign IN
router.post("/signin",signIn)

//Google Auth/ OAuth
router.post("/oAuth",)


export default router;