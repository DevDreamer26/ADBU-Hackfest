import express from "express"
import { addquiz } from "../controllers/quiz.js"
import { verifyToken } from "../verifyToken.js";




const router = express.Router();




router.post("/addquiz",verifyToken, addquiz)





export default router;