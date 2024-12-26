import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import contactRoutes from './routes/contactRoutes.js'
import mongoose from 'mongoose'
// import connectDB from './db/configDB.js'


const app = express()
dotenv.config()

app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.status(200).send({
        messsage:'welcome to Backend'
    })
})

app.use('/contact',contactRoutes)

const PORT =process.env.PORT || 8080

app.listen(PORT,()=>{
    console.log(`server is sucessfully running on ${PORT}`)
    // connectDB()
})


mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
    console.log("DB connection is successfully established!")
})
.catch((error)=>{
    console.error("failed to connect to DB",error.message)
})


export default app