import express from "express"
import { addnotification } from "../controllers/notification.js"




const router = express.Router();




router.post("/addnotification", addnotification)





export default router;