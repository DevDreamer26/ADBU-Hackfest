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
        const users = await user.findOne({ name: req.body.name });
        if (!users) {
            console.log('Incorrect name');
            return res.status(404).json({ error: "Incorrect name" });
        }


        if (!users.password) {
            console.log('Password field missing in user object');
            return res.status(500).json({ error: "Internal Server Error" });
        }

        const isCorrect = await bcrypt.compare(req.body.password.toString(), users.password);
        if (!isCorrect) {
            console.log('Incorrect password');
            return res.status(401).json({ error: "Incorrect password" });
        }

        const { password, ...others } = users._doc;
        const token = jwt.sign({ id: users._id }, JWT);
        res.cookie("access_token", token, {
            httpOnly: true,
        }).status(200).json({others,token});
        console.log('Logged in');
    } catch (error) {
        console.log(error);
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