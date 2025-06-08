import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.goit.global/';

function setAuthHeader(token) {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export const register = createAsyncThunk('auth/register', async (newUser) => {
  const res = await axios.post('/users/signup', newUser);
  setAuthHeader(res.data.token);
  return res.data;
});

export const login = createAsyncThunk('auth/login', async (user) => {
  const res = await axios.post('/users/login', user);
  setAuthHeader(res.data.token);
  return res.data;
});

export const logout = createAsyncThunk('auth/logout', async () => {
  await axios.post('/users/logout');
  axios.defaults.headers.common.Authorization = '';
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const reduxState = thunkAPI.getState();
    setAuthHeader(reduxState.auth.token);
    const res = await axios.get('/users/current');
    return res.data;
  },
  {
    condition: (_, thunkAPI) => {
      const reduxState = thunkAPI.getState();
      return reduxState.auth.token !== null;
    },
  },
);
