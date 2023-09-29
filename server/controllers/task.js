import task from "../models/task.js";



export const addtask = async (req, res) => {
    try {
        const newtask = new task(req.body)
        const savedtask = await newtask.save();
      res.status(200).json(savedtask);
    } catch (error) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}