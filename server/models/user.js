import mongoose from 'mongoose'


const userSchema = new mongoose.Schema({
    name : {type: String, required: true},
    password : {type: String, required: true},
    points : {type: Number, default: 0 },
    status : {type: String, default: "student"}
})


export default mongoose.model("yuser", userSchema)