import mongoose, { Schema } from "mongoose";


const contactSchema = new Schema({
    userName:{type:String},
    phoneNumber:{type:Number},
    Email:{type:String},
    DateofBirth:{type:Date},
    designation:{type:String},

},{timestamps:true})



const contactModel = mongoose.model("Contact",contactSchema)


export default contactModel