import course from "../models/course.js";



export const addCourse = async (req, res) => {
    try {
        const newCourse = new course(req.body)
        const savedCourse = await newCourse.save();
      res.status(200).json(savedCourse);
    } catch (error) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


export const findCourse = async (req, res) => {
    try {
        const Course = await course.find()
      res.status(200).json(Course);
    } catch (error) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


export const findsingleCourse = async (req, res) => {
    try {
        const Course = await course.findById(req.params.id)
      res.status(200).json(Course);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}




export const addschedule = async (req, res) => {
    try {
      const CourseId = req.params.id;
      const Course = await course.findById(CourseId);
  
      if (!Course) {
        return res.status(404).json({ message: "Course not found" });
      }

      const newSchedule = {
        schedule: req.body.schedule,
      };
  
      Course.courseschedule.push(newSchedule);
  
      await Course.save();
  
      res.status(201).json({ message: "Schedule added successfully", course });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  };







