  
import { configureStore } from '@reduxjs/toolkit';
import bookingReducer from './slices/bookSlice';


const store = configureStore({
    reducer:{
        booking: bookingReducer
    }
})

export default store