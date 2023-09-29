import express from "express"
import { addquiz } from "../controllers/quiz.js"




const router = express.Router();




router.post("/addquiz", addquiz)





export default router;