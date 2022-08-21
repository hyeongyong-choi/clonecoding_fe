import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getCookie } from "../../shared/cookies.js";

const initialState = {
  image: [],
  isLoading: false,
  error: null,
};

export const __postImage = createAsyncThunk(
  "POST_IMAGE",
  async (payload, thunkAPI) => {
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:3001/articles",
        data: payload,
        headers: { "Content-Type": "multipart/form-data", Authorization: `${getCookie("mycookie")}` }
      })
      console.log(response)
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const ImageSlice = createSlice({
  name: "ImageSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [__postImage.pending]: (state) => {
      state.isLoading = true;
    },
    [__postImage.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
    },
    [__postImage.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload.response.data.error;
    }
  }
})