import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { viewContact } from '../store/features/contactReducer';
import { IoMdArrowRoundBack } from "react-icons/io";

function ViewContact() {
  const navigate = useNavigate();
  const { id } = useParams(); 
  const { contacts } = useSelector((state) => state.contacts); 

  const filterContact = contacts.find((item) => item._id === id); 

  if (!filterContact) {
    return <div className="text-center mt-4 text-lg text-gray-500">Contact not found</div>;
  }

  return (
    <div className="w-screen h-screen bg-[#F5F5FA] flex justify-center items-center">
      <div className="max-w-screen-sm sm:max-w-screen-md mx-auto px-6 sm:px-10 py-8 sm:py-10 bg-white shadow-lg rounded-xl relative">
        
        {/* Back Arrow */}
        <div className="back-arrow absolute left-4 top-4" onClick={() => navigate('/')}>
          <IoMdArrowRoundBack className="w-6 h-6 text-gray-600" />
        </div>
        
        {/* Profile Section */}
        <div className="flex items-center justify-center flex-col sm:flex-row">
          <img
            src={filterContact.profilePic || 'https://via.placeholder.com/150'}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover shadow-lg border-2 border-gray-300"
          />
          <div className="mt-4 sm:mt-0 sm:ml-6 text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800">{filterContact.userName}</h1>
            <p className="text-lg sm:text-xl text-gray-600">UI/UX Designer</p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Email</h3>
            <p className="text-gray-600">{filterContact.Email}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Phone Number</h3>
            <p className="text-gray-600">{filterContact.phoneNumber}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Date of Birth</h3>
            <p className="text-gray-600">{new Date(filterContact.DateofBirth).toLocaleDateString()}</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 focus:outline-none">
            Message
          </button>
          <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded-full shadow-md hover:bg-gray-300 focus:outline-none">
            Call
          </button>
          <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded-full shadow-md hover:bg-gray-300 focus:outline-none">
            More
          </button>
        </div>
      </div>
    </div>
  );
}

export default ViewContact;
