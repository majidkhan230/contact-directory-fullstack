import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { postReq, updReq } from "../../api/axios";
import { redirect, useNavigate, useParams } from "react-router-dom";
import { updContact } from "../store/features/contactReducer";

function AddContact({ isEditContact }) {
  const allContacts = useSelector((state) => state.contacts.contacts);
  console.log(allContacts);

  const dispatch = useDispatch()
  
  
  const { id } = useParams();
  console.log(id);

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

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
    <div>
      <h1>{isEditContact ? "Edit Contact" : "Add Contact"}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input className="border " type="text" {...register("userName")} />
        <input className="border " type="number" {...register("phoneNumber")} />
        <input className="border " type="text" {...register("Email")} />
        <input className="border " type="date" {...register("DateofBirth")} />
        <input className="border " type="text" {...register("designation")} />

        <input type="submit" />
      </form>
    </div>
  );
}

export default AddContact;
