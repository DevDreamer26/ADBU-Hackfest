import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
  questionText: {
    type: String,
    required: true,
  },
  answerOptions: [
    {
      answerText: {
        type: String,
        required: true,
      },
      isCorrect: {
        type: Boolean,
        required: true,
      },
    },
  ],
});

export default mongoose.model("quiz", quizSchema)