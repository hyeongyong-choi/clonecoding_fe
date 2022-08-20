import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getCookie } from "../../shared/cookies.js";

const initialState = {
  articles: [],
  devtool: {
    comments: [],
  },
  isLoading: false,
  error: null,
};

export const __getInstaList = createAsyncThunk(
  "getInstaList",
  async (payload, thunkAPI) => {
    console.log("__getInstaList 동작");
    try {
      const response = await axios({
        method: "get",
        url: "http://localhost:3001/articles",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${getCookie("mycookie")}`,
        },
      });
      console.log(response.data);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __postInstaCard = createAsyncThunk(
  "postInstaCard",
  async (payload, thunkAPI) => {
    try {
      const response = await axios({
        method: "post",
        url: `/api/articles`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `${getCookie("mycookie")}`,
        },
        data: payload,
      });
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __updateInstaCard = createAsyncThunk(
  "updateInstaCard",
  async (payload, thunkAPI) => {
    try {
      const response = await axios({
        method: "patch",
        url: `/api/articles/${payload.id}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `${getCookie("mycookie")}`,
        },
        data: { content: payload.content },
      });
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteInstaCard = createAsyncThunk(
  "deleteInstaCard",
  async (payload, thunkAPI) => {
    try {
      const response = await axios({
        method: "delete",
        url: `/api/articles/${payload}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `${getCookie("mycookie")}`,
        },
      });
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getDetail = createAsyncThunk(
  "getDetail",
  async (payload, thunkAPI) => {
    try {
      const response = await axios({
        method: "get",
        url: `/api/articles/${payload}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `${getCookie("mycookie")}`,
        },
      });
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __postComments = createAsyncThunk(
  "postComments",
  async (payload, thunkAPI) => {
    try {
      const response = await axios({
        method: "post",
        url: `/api/articles/${("PAYLOAD", payload.articleId)}/comments`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `${getCookie("mycookie")}`,
        },
        data: { comment: payload.comment },
      });
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const InstaSlice = createSlice({
  name: "InstaSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [__getInstaList.pending]: (state) => {
      state.isLoading = true;
    },
    [__getInstaList.fulfilled]: (state, { payload }) => {
      console.log("payload", payload);
      state.isLoading = false;
      state.articles = payload;
    },
    [__getInstaList.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [__postInstaCard.pending]: (state) => {
      state.isLoading = true;
    },
    [__postInstaCard.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
    },
    [__postInstaCard.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload.response.data.error;
    },
    [__updateInstaCard.pending]: (state) => {
      state.isLoading = true;
    },
    [__updateInstaCard.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.devtool.content = payload.content;
    },
    [__updateInstaCard.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload.response.data.error;
    },
    [__deleteInstaCard.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteInstaCard.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.devtools = state.devtools.filter(
        (val) => val.articleId !== payload
      );
    },
    [__deleteInstaCard.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload.response.data.error;
    },
    [__getDetail.pending]: (state) => {
      state.isLoading = true;
    },
    [__getDetail.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.devtool = payload;
    },
    [__getDetail.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload.response.data.error;
    },
    [__postComments.pending]: (state) => {
      state.isLoading = true;
    },
    [__postComments.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.devtool.comments.unshift(payload);
    },
    [__postComments.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload.response.data.error;
    },
  },
});

export default InstaSlice;
