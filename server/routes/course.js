import express from "express"
import { addCourse, addschedule, findCourse, findsingleCourse } from "../controllers/course.js"
import { verifyToken } from "../verifyToken.js";




const router = express.Router();




router.post("/addcourse", addCourse)
router.get("/findcourse", verifyToken, findCourse)
router.get("/findsinglecourse/:id", verifyToken, findsingleCourse)
router.post("/addschedule/:id", verifyToken, addschedule)





export default router;