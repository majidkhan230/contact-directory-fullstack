import contactModel from "../models/contact.Model.js"

const viewContact = async(req,res)=>{
    try {
        const id = req.params.id
        
        const user = await contactModel.findById(id)
        res.status(200).send(
            {
                message:"OK",
                user:user
            })
            
        } catch (error) {
            res.status(400).send({
                message:"something went wrong with server",
                error:error.message
            })
        }
}

const viewAllContacts = async(req,res)=>{
    try {
        
        const users = await contactModel.find({

        })
        res.status(200).send(
            {
                message:"OK",
                users:users
            })
            
        } catch (error) {
            res.status(400).send({
                message:"something went wrong with server",
                error:error.message
            })
        }
}


// addContact
const addContact = async(req,res)=>{
try {
const {userName,phoneNumber,Email,DateofBirth,designation} = req.body

const user = await contactModel.create({
    userName,
    phoneNumber,
    Email,
    DateofBirth,
    designation
})
res.status(201).send(
    {
        message:"user sucessfully  created",
        user:user
    })
    
} catch (error) {
res.status(400).send({
    message:"something went wrong with server",
    error:error.message
})
}
}
const updateContact = async(req,res)=>{
    try {
        const id = req.params.id
        const users = await contactModel.findByIdAndUpdate(id,req.body)
        res.status(200).send(
            {
                message:"user sucessfully updated",
                users:users
            })
            
        } catch (error) {
            res.status(400).send({
                message:"something went wrong with server",
                error:error.message
            })
        }
}
const delContact = async(req,res)=>{
    try {
        const id = req.params.id
        const users = await contactModel.findByIdAndDelete(id)
        res.status(200).send(
            {
                message:"user sucessfully deleted",
                users:users
            })
            
        } catch (error) {
            res.status(400).send({
                message:"something went wrong with server",
                error:error.message
            })
        }
}


const contactController = {viewContact,addContact,updateContact,delContact,viewAllContacts}


export default contactController;