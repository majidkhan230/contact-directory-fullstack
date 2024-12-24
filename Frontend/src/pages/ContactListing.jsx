import React, { useEffect } from "react";
import { delReq, getReq, updReq } from "../../api/axios";
import { useDispatch, useSelector } from "react-redux";
import { delContact, setContacts } from "../store/features/contactReducer";
import { useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { MdOutlineEdit,MdDelete } from "react-icons/md";
import dummyImg from '/assets/images/avatar.gif'
function ContactListing() {
  const navigate = useNavigate();

  const { contacts } = useSelector((state) => state.contacts);
  console.log({ contacts });

  const dispatch = useDispatch();

  // getAllContacts
  const getAllContacts = async () => {
    const res = await getReq("contact/view");
    const data = await res?.data?.users;
    console.log(data);
    dispatch(setContacts(data));
  };
  useEffect(() => {
    getAllContacts();
  }, []);

  //onEdit
  const onEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  //onDelete

  const onDelete = async (id) => {
    await delReq(`contact/delete/${id}`);
    dispatch(delContact(id));
  };

  return (
    <div className="w-full bg-[#F5F5FA] p-6">
      <div className="container mx-auto">
        <h1 className="font-semibold opacity-75 text-2xl mb-4 text-center">
          Search for a contact
        </h1>
        <div className="search-area flex items-center border rounded-full px-4 py-2 bg-white shadow-sm">
          <input
            type="text"
            className="w-full outline-none"
            placeholder="Name, email or phone number"
          />
          <CiSearch className="w-6 h-6 text-gray-500" />
        </div>
      </div>

      <div className="contacts mt-6">
        {contacts.map((contact, index) => (
          <div
            key={index}
            className="flex justify-between items-center px-4 py-2 bg-white rounded-lg shadow-sm mb-2"
          >
            <div className="flex items-center">
              <img
                src={dummyImg}
                alt={contact.userName}
                className="w-10 h-10 rounded-full mr-4 object-cover object-center "
              />
              <div>
                <h3 className="font-semibold">{contact.userName}</h3>
                <p className="text-sm text-gray-500">{contact.designation}</p>
              </div>
            </div>
            <div className="flex space-x-2">
             
              <button
                className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 mr-2"
                onClick={() => onEdit(contact?._id)}
              >
                <MdOutlineEdit className="w-5 h-5" />
              </button>
              <button
                className="bg-red-500 text-white  p-2 rounded-full hover:bg-red-600"
                onClick={() => onDelete(contact?._id)}
              >
               <MdDelete className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactListing;
