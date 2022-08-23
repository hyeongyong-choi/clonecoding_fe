import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getCookie, setCookie } from "../../shared/cookies.js";



const BASE_URL = '';

export const __getMyFeed = createAsyncThunk(
  "GET_MY_FEED",
  async (payload, thunkAPI) => {
    try {
      const response = await axios({
        method: "get",
        url: `${BASE_URL}/api/mypage`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `${getCookie("token")}`,
        },
      })
      console.log(response.data);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
)

const initialState = {
  articles: [],
  isLoading: false,
  error: null,
};

export const MyPageSlice = createSlice({
  name: "MyPageSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [__getMyFeed.pending]: (state) => {
      state.isLoading = true;
    },
    [__getMyFeed.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.articles = action.payload;
    },
    [__getMyFeed.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  }
})

export default MyPageSlice;