import { createSlice } from "@reduxjs/toolkit";

export const selectStatusFilter = (state) => state.filters.status;

const filtersSlice = createSlice({
  name: "fiiters",
  initialState: {
    status: 'all',
  },
  reducers: {
    setStatusFilter(state, action){
      state.status = action.payload
      // return{
      //   ...state,
      //   status: action.payload,
      // }
    }
  } 
});

export const {setStatusFilter} = filtersSlice.actions;

export default filtersSlice.reducer;