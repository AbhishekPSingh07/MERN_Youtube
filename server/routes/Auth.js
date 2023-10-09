import express from 'express';
import { signUp } from '../controllers/Auth.js';

const router = express.Router();

//Create a new User
router.post("/signup",signUp)

//Sign IN
router.post("/signIn",)

//Google Auth/ OAuth
router.post("/oAuth",)


export default router;