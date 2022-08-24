import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getCookie, removeCookie, setCookie } from "../../shared/cookies";



const BASE_URL = 'http://3.39.231.99:8080';


const config = {
  headers: {
    // "Content-Type": "application/json",
    authorization: `Bearer ${getCookie("token")}`,
    userName: `${getCookie("userName")}`,
  },
};


export const __loginUser = createAsyncThunk(
  "LOGIN_USER",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const data = await axios.post(`${BASE_URL}/api/login`, payload);
      console.log("data", data);
      setCookie("token", data.data.token);
      setCookie("userName", data.data.userName);


      // setCookie('userId', data.data.userId);
      // setCookie('userEmail', data.data.userEmail);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      console.log("error", error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __signupUser = createAsyncThunk(
  "Register_USER",
  async (payload, thunkAPI) => {
    try {
      console.log(payload);
      console.log("payload", payload);
      const data = await axios.post(`${BASE_URL}/api/register`, payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log("error", error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// export const __getName = createAsyncThunk('getUserName', async (_, thunkAPI) => {
//   try {
//       console.log(config)
//       const data = await axios.get(`${BASE_URL}/api/login`,config);
//       console.log('data',data)
//       return thunkAPI.fulfillWithValue({ headers: data.headers, data: data.data });
//   } catch (error) {
//     console.log('error', error)
//     return thunkAPI.rejectWithValue(error.message)
//   }
// })

export const __getUser = createAsyncThunk(
  "GET_USER",
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
  user: config,
  isLogin: false,
  error: null,
};

export const userSlice = createSlice({
  name: "userSlice",
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
      // console.log(action.payload)
      // state.error = action.payload.response.data;
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
