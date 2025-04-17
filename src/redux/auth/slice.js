import { createSlice } from '@reduxjs/toolkit';
import {logIn, logOut, refreshUser, register} from './operations'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isLoading: false,
    isError: null,
    isRefreshing: false,
  },
  extraReducers: builder => {
    builder
    .addCase(register.pending, state => {
      state.isLoading = true
    })
    .addCase(register.fulfilled, (state, action) => {
      state.isError = null;
      state.isLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    })
    .addCase(register.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.payload
    })
    .addCase(logIn.pending, state => {
      state.isLoading = true;
    })
    .addCase(logIn.fulfilled, (state, action) => {
      state.isError = null;
      state.isLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    })
    .addCase(logOut.pending, state => {
      state.isLoading = true;
    })
    .addCase(logOut.fulfilled, state => {
      state.isError = null;
      state.isLoading = false;
      state.user = {
        name: null,
        email: null,
      }
      state.token = null;
      state.isLoggedIn = false;
    })
    .addCase(refreshUser.pending, state => {
      state.isRefreshing = true;
    })
    .addCase(refreshUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    })
  }

});  

export const authReducer = authSlice.reducer;
