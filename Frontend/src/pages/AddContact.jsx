import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { postReq, updReq } from "../../api/axios";
import { redirect, useLocation, useNavigate, useParams } from "react-router-dom";
import { updContact } from "../store/features/contactReducer";

function AddContact({ isEditContact }) {
  const allContacts = useSelector((state) => state.contacts.contacts);
  console.log(allContacts);

  const location = useLocation();
  const contactToEdit = location.state?.contact || {};
  // console.log(contactToEdit)
  const dispatch = useDispatch()
  
  
  const { id } = useParams();
  console.log(id);

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(()=>{
    if (isEditContact && contactToEdit) {
      setValue("userName", contactToEdit.userName);
      setValue("phoneNumber", contactToEdit.phoneNumber);
      setValue("Email", contactToEdit.Email);
      setValue("DateofBirth", contactToEdit.DateofBirth);
      setValue("designation", contactToEdit.designation);
    }
  },[isEditContact,contactToEdit,setValue])
  
  const onSubmit = async (data) => {
    if (isEditContact) {
      const res = await updReq(`contact/update/${id}`, data);
      console.log(res);
      dispatch(updContact(res))
      if(res){
        navigate("/")
      }
    } else {
      const res = await postReq("contact/add", data);
      console.log(res);
      if(res){
        navigate("/")
      }
    }
  };

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <div className="min-h-screen bg-[#F5F5FA] flex items-center justify-center p-4">
    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
        {isEditContact ? "Edit Contact" : "Add Contact"}
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4"
      >
        <input
          className="border border-gray-300 rounded-md w-full px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Username"
          {...register("userName")}
        />
        <input
          className="border border-gray-300 rounded-md w-full px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="number"
          placeholder="Phone Number"
          {...register("phoneNumber")}
        />
        <input
          className="border border-gray-300 rounded-md w-full px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Email"
          {...register("Email")}
        />
        <input
          className="border border-gray-300 rounded-md w-full px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="date"
          {...register("DateofBirth")}
        />
        <input
          className="border border-gray-300 rounded-md w-full px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Designation"
          {...register("designation")}
        />
  
        <button
          type="submit"
          className="bg-blue-500 text-white font-medium rounded-md w-full py-2 hover:bg-blue-600 transition duration-300"
        >
          {isEditContact ? "Update Contact" : "Add Contact"}
        </button>
      </form>
    </div>
  </div>
  
  );
}

export default AddContact;
