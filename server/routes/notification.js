import express from "express"
import { addnotification } from "../controllers/notification.js"
import { verifyToken } from "../verifyToken.js";




const router = express.Router();




router.post("/addnotification",verifyToken, addnotification)





export default router;