import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { postReq } from "../../api/axios";

function AddContact() {
  const allContacts = useSelector((state) => state.contacts);
  console.log(allContacts);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  
  
  const onSubmit = async(data) => {
  const res =   await postReq('contact/add',data)
  console.log(res)
  };

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input className="border " type="text" {...register("userName")} />
      <input className="border " type="number" {...register("phoneNumber")} />
      <input className="border " type="text" {...register("Email")} />
      <input className="border " type="date" {...register("DateofBirth")} />
      <input className="border " type="text" {...register("designation")} />

      <input type="submit" />
    </form>
  );
}

export default AddContact;
