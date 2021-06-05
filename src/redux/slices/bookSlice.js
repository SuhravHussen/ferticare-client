import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'




const bookSlice =  createSlice(
    {
        name: 'order',
        initialState:{
            addBooking: {},
            newbooking:{},

        },
        reducers:{
            addBooking: (state, {payload})=>{
                state.addBooking = payload
                 }
        }
    }
)

export const {addBooking} = bookSlice.actions;

export const sendTOserver =(payload)=>(dispatch)=>{
    fetch("https://secure-forest-43490.herokuapp.com/addOrder", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      }).then(res=>res.json())
      .then(data=>dispatch(addBooking(data)));
}

export default bookSlice.reducer