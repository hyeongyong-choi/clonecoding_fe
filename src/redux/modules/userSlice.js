import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { getCookie, setCookie } from '../../shared/cookies';


const BASE_URL = 'http://43.200.170.123';

const config = {
    headers: {
      Authorization: `Bearer ${getCookie('ACCESS_TOKEN')}`,
    },
  };

  export const __loginUser = createAsyncThunk(
    'LOGIN_USER',
    async (payload, thunkAPI) => {
      try {
        console.log(payload)

        const data = await axios.post(`api/login`, payload);
        setCookie('ACCESS_TOKEN', data.data.result.data.accessToken);
        setCookie('userName', data.data.result.data.userName);
        setCookie('userId', data.data.result.data.userId);
        setCookie('userEmail', data.data.result.data.userEmail);
        return thunkAPI.fulfillWithValue(data.data.result.data);
      } catch (error) {
        console.log('error' , error)
        return thunkAPI.rejectWithValue(error);
      }
    }
  );

  export const __signupUser = createAsyncThunk(
    'Register_USER',
    async (payload, thunkAPI) => {
      try {
        console.log('payload',payload)
        const data = await axios.post(`${BASE_URL}/api/register`, payload);
        return thunkAPI.fulfillWithValue(data.data);
      } catch (error) {
        console.log('error' , error)
        return thunkAPI.rejectWithValue(error);
      }
    }
  );

  export const __getUser = createAsyncThunk(
    'GET_USER',
    async (payload, thunkAPI) => {
      try {
        const data = await axios.get(`api/user/${payload}`, config);
        return thunkAPI.fulfillWithValue(data.data);
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );

  const initialState = {
    user: {},
    isLogin: false,
    error: null,
  };
  
  export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {},
    extraReducers: {
      [__loginUser.pending]: (state) => {
        state.isLoading = true;
      },
      [__loginUser.fulfilled]: (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isLogin = true;
      },
      [__loginUser.rejected]: (state, action) => {
        state.isLoading = false;
        state.error = action.payload.response.data;
      },
      [__signupUser.pending]: (state) => {
        state.isLoading = true;
      },
      [__signupUser.fulfilled]: (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      },
      [__signupUser.rejected]: (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      },
      [__getUser.pending]: (state) => {
        state.isLoading = true;
      },
      [__getUser.fulfilled]: (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      },
      [__getUser.rejected]: (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      },
    },
  });
  
  export default userSlice;