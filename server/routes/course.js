import express from "express"
import { addCourse, addschedule } from "../controllers/course.js"




const router = express.Router();




router.post("/addcourse", addCourse)
router.post("/addschedule/:id", addschedule)





export default router;