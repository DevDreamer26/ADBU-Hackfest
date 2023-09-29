import express from "express"
import { addquizpoints, signin, signup, updateUserPoints } from "../controllers/user.js";
import { verifyToken } from "../verifyToken.js";


const router = express.Router();


router.post("/signup", signup)
router.post("/signin", signin)
router.put("/updatepoints",verifyToken, updateUserPoints)
router.put("/quizpoints",verifyToken, addquizpoints)




export default router;