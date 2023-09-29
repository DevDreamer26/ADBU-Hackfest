import mongoose from 'mongoose'

const scheduleSchema = new mongoose.Schema({
    schedule: {
        type: String
    },
    
},
    {
        timestamps: true,
    }
)


const notesSchema = new mongoose.Schema({
    notes: {
        type: String
    }
},
    {
        timestamps: true,
    }
)

const courseSchema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    description: {type: String, required : true},
    courseschedule : [scheduleSchema],
    notes : [notesSchema]
})

const course = mongoose.model("Course", courseSchema);
export default course;