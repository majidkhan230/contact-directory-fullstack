import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    contacts:[]
}


export const contactSlice = createSlice(
    {
        name:"contact",
        initialState,
        reducers:{
            setContacts:(state,{payload})=>{
                return state.contacts = payload
            },
            addContact:(state,{payload})=>{
                return state.contacts.push(payload)
            },
            updContact:(state,{payload})=>{
                const index = state.contacts.findIndex((item)=>(item._id == payload ))
                if(index !== -1){
                    return state.contacts[index] = payload
                }
            },
            delContact:(state,{payload})=>{
                return state.contacts =  state.contacts.filter((item)=>(item._id !==payload))
            }
        }
    }
)


export const {setContacts,addContact,updContact,delContact} = contactSlice.actions


export default contactSlice.reducer

