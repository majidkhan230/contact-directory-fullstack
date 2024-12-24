import {configureStore} from '@reduxjs/toolkit'
import contactReducer from './features/contactReducer'

const store = configureStore({
    reducer:{
        contacts:contactReducer
    }
})



export default store