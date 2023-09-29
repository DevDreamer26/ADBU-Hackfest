import notification from "../models/notification.js";



export const addnotification = async (req, res) => {
    try {
        const newnotification = new notification(req.body)
        const savednotification = await newnotification.save();
      res.status(200).json(savednotification);
    } catch (error) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}