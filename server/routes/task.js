import express from "express"
import { addtask, findtask } from "../controllers/task.js"
import { verifyToken } from "../verifyToken.js";




const router = express.Router();




router.post("/addtask",verifyToken, addtask)
router.get("/findtask",verifyToken, findtask)





export default router;