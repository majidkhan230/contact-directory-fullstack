import express from 'express'
import contactController from '../controllers/contact.Controller.js';


const contactRoutes = express.Router();

contactRoutes.get('/view',contactController.viewAllContacts)
contactRoutes.get('/view/:id',contactController.viewContact)
contactRoutes.post('/add',contactController.addContact)
contactRoutes.put('/update/:id',contactController.updateContact)
contactRoutes.delete('/delete/:id',contactController.delContact)


export default contactRoutes