import React, { useEffect } from "react";
import { delReq, getReq, updReq } from "../../api/axios";
import { useDispatch, useSelector } from "react-redux";
import { delContact, setContacts } from "../store/features/contactReducer";
import { useNavigate } from "react-router-dom";

function ContactListing() {

  const navigate = useNavigate()
  
  const {contacts} = useSelector((state)=>(state.contacts))
  console.log({contacts})

  const dispatch = useDispatch()

  
  
  // getAllContacts
  const getAllContacts = async () => {
    const res = await getReq("contact/view");
    const data = await res?.data?.users;
    console.log(data);
    dispatch(setContacts(data))

  };
  useEffect(() => {
    getAllContacts();
  }, []);

//onEdit 
const onEdit = (id)=>{
navigate(`/edit/${id}`)

}
  
  
//onDelete

const onDelete = async(id)=>{
  await delReq(`contact/delete/${id}`)
  dispatch(delContact(id))
}
  
  
  
  
  return <div>

<table className="min-w-full bg-white border border-gray-300">
            <thead>
                <tr>
                    <th className="py-2 px-4 border-b">User Name</th>
                    <th className="py-2 px-4 border-b">Phone Number</th>
                    <th className="py-2 px-4 border-b">Email</th>
                    <th className="py-2 px-4 border-b">Date of Birth</th>
                    <th className="py-2 px-4 border-b">Designation</th>
                    <th className="py-2 px-4 border-b">Actions</th>
                </tr>
            </thead>
            <tbody>
                {contacts.map((contact, index) => (
                    <tr key={index} className="text-center">
                        <td className="py-2 px-4 border-b">{contact.userName}</td>
                        <td className="py-2 px-4 border-b">{contact.phoneNumber}</td>
                        <td className="py-2 px-4 border-b">{contact.Email}</td>
                        <td className="py-2 px-4 border-b">{new Date(contact.DateofBirth).toLocaleDateString()}</td>
                        <td className="py-2 px-4 border-b">{contact.designation}</td>
                        <td className="py-2 px-4 border-b">
                            <button
                                className="bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600 mr-2"
                                onClick={()=>(onEdit(contact?._id))}
                            >
                                Edit
                            </button>
                            <button
                                className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600"
                                onClick={()=>(onDelete(contact?._id))}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>

  </div>;
}

export default ContactListing;
