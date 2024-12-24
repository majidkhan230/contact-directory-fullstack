import React, { useEffect } from "react";
import { getReq } from "../../api/axios";
import { useDispatch, useSelector } from "react-redux";
import { setContacts } from "../store/features/contactReducer";

function ContactListing() {

  
  const allContacts = useSelector((state)=>(state.contacts))
  console.log(allContacts)

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

  return <div className="text-bold text-orange-500">ContactListing</div>;
}

export default ContactListing;
