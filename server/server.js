import express from 'express'
import mongoose from 'mongoose'
import courseRouter from './routes/course.js'
import notificationRouter from './routes/notification.js'
import taskRouter from './routes/task.js'
import quizRouter from './routes/quiz.js'
import userRouter from './routes/user.js'
import cookieParser from 'cookie-parser';
import cors from 'cors'






const app = express();


const connect = async() => {
    try{
        await mongoose.connect('mongodb+srv://zorochan404:0vOspCKnyCB5xKHU@cluster0.wry0vxs.mongodb.net/?retryWrites=true&w=majority')
        console.log(`connected to ${mongoose.connection.host}`)
    }catch(err)
    {
        console.log(`${err} in connecting`)
    }
}






app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true, // Allow credentials
    allowedHeaders: ['Content-Type', 'Authorization', 'Set-Cookie'],
  }));
app.use(cookieParser());
app.use(express.json())
app.use('/api/course', courseRouter)
app.use('/api/notification', notificationRouter)
app.use('/api/task', taskRouter)
app.use('/api/user', userRouter)
app.use('/api/quiz', quizRouter)





connect()

app.listen(8800, ()=> console.log ('listening on port 8800'))