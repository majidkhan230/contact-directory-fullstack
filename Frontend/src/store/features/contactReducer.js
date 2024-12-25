import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: [],
};

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    setContacts: (state, { payload }) => {
      state.contacts = payload;
    },
    addContact: (state, { payload }) => {
      state.contacts.push(payload);
    },
    updContact: (state, { payload }) => {
      const index = state.contacts.findIndex((item) => item._id == payload);
      if (index !== -1) {
        state.contacts[index] = payload;
      }
    },
    delContact: (state, { payload }) => {
      state.contacts = state.contacts.filter((item) => item._id !== payload);
    },
  
    // filterContact: (state, { payload }) => {
    //     state.contacts = state.contacts.filter((item) =>
    //       Object.values(item).some((value) =>
    //         value.toString().toLowerCase().includes(payload.toLowerCase())
    //       )
    //     );
    //   },
      
  },
});

export const {
  setContacts,
  addContact,
  updContact,
  delContact,
  viewContact
} = contactSlice.actions;

export default contactSlice.reducer;
