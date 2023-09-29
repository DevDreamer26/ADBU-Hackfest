import mongoose from 'mongoose'
import user from '../models/user.js'
import bcrypt from "bcryptjs"
import jwt  from "jsonwebtoken";



const JWT = "hjfdsiuhgsiuhg"



export const signup = async(req, res) =>{
    try{
        const password = req.body.password.toString()
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        const newUser = new user({...req.body, password: hash})


        await newUser.save()
        res.status(200).send("User created")
    }catch (err) {
        console.log(err)
        res.status(500).send("An error occurred");
    }
}









export const signin = async (req, res) => {
    try {
        const userFound = await user.findOne({ name: req.body.name });
        if (!userFound) {
            console.log('incorrect username');
            // You might want to return a response indicating the incorrect username.
            return res.status(401).json({ error: 'Incorrect username or password' });
        }

        const isCorrect = await bcrypt.compare(req.body.password.toString(), userFound.password);
        if (!isCorrect) {
            console.log('incorrect password');
            // You might want to return a response indicating the incorrect password.
            return res.status(401).json({ error: 'Incorrect username or password' });
        }

        const { password, ...others } = userFound.toObject(); // Use toObject to get a plain JavaScript object.

        const token = jwt.sign({ id: userFound._id }, JWT);
        res.cookie("access_token", token, {
            httpOnly: true
        }).status(200).json({ ...others, token }); // Use spread operator to include other properties.

        console.log(userFound._id);
    } catch (err) {
        console.log(err);
        res.status(500).send("An error occurred");
    }
};




export const updateUserPoints = async (req, res) => {
    try {
      // Find the user by _id and increment the points by 1
      const updatedUser = await user.findByIdAndUpdate(
        req.user.id,
        { $inc: { points: 1 } }, // Use $inc to increment the points by 1
        { new: true } // Return the updated document
      );
  
      if (!updatedUser) {
        // User with the given _id was not found
        throw new Error('User not found');
      }

  
      // Return the updated user along with the success message
      return res.status(200).json({user: updatedUser });
    } catch (error) {
      // Handle errors, e.g., user not found or database error
      return res.status(500).json({ error: error.message });
    }
  };
  



  export const addquizpoints = async (req, res) => {
    try {
        // Create a new quiz section document
        const newquizpoint = await user.findByIdAndUpdate(
            req.user.id,
            {$inc: { points: req.body.score }},
            { new: true});
    
        // Save the quiz section to the database
        const savedQuiz = await newquizpoint.save();
    
        res.status(200).json(savedQuiz);
      } catch (error) {
        console.log(error);
      }
}