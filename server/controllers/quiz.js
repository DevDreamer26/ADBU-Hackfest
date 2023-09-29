import quiz from "../models/quiz.js"
import user from "../models/user.js";


export const addquiz = async (req, res) => {
    try {
        // Create a new quiz section document
        const newQuiz = new quiz({
          questionText: req.body.questionText,
          answerOptions: req.body.answerOptions,
        });
    
        // Save the quiz section to the database
        const savedQuiz = await newQuiz.save();
    
        res.status(200).json(savedQuiz);
      } catch (error) {
        console.log(error);
      }
}





