import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "fiiters",
  initialState: {
    status: 'all',
  },
  reducers: {
    setStatusFilter(state, action){
      return{
        ...state,
        status: action.payload,
      }
    }
  } 
});

export const {setStatusFilter} = slice.actions;

export default slice.reducer;