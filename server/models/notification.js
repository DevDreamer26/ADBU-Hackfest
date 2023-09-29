import mongoose from 'mongoose'

const notificationSchema = mongoose.Schema({
    message : {
        type: String,
        required : true
    }
})


export default mongoose.model("notification", notificationSchema)