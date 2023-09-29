import express from "express"
import { addtask } from "../controllers/task.js"




const router = express.Router();




router.post("/addtask", addtask)





export default router;