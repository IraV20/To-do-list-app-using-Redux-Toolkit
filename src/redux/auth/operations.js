import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://task-manager-api.goit.global';

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
}


export const register = createAsyncThunk("auth/register",
  async (newUser, thunkAPI) => {
    try {
      const res = await axios.post('/users/signup', newUser);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk("auth/login",
  async (userData, thunkAPI) => {
    try {
      const res = await axios.post('/users/login', userData);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", 
  async (_, thunkAPI) => {
    try {
      const res = await axios.post('/users/logout');
      clearAuthHeader();
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
});

export const refreshUser = createAsyncThunk("auth/refresh", 
  async (_, thunkAPI) => {
    const refreshState = thunkAPI.getState();
    setAuthHeader(refreshState.auth.token);
    const res = await axios.get("users/me");
    return res.data; 
  },
  {
    condition(_, thunkAPI) {
      const refreshState = thunkAPI.getState();
      return refreshState.auth.token !== null;
    }
  }
)
