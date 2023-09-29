import mongoose from 'mongoose'

const taskSchema = mongoose.Schema({
    task : {
        type: String,
        required : true
    },
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }
})


export default mongoose.model("task", taskSchema)