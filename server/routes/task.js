import express from "express"
import { addtask, findtask } from "../controllers/task.js"




const router = express.Router();




router.post("/addtask", addtask)
router.get("/findtask", findtask)





export default router;