import express from "express"
import { addCourse, addschedule, findCourse, findsingleCourse } from "../controllers/course.js"
import { verifyToken } from "../verifyToken.js";




const router = express.Router();




router.post("/addcourse", addCourse)
router.get("/findcourse", findCourse)
router.get("/findsinglecourse/:id", findsingleCourse)
router.post("/addschedule/:id", addschedule)





export default router;