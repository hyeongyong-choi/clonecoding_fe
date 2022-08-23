import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getCookie, setCookie } from "../../shared/cookies.js";

const initialState = {
  articles: [],
  like: [],
  article: {
    comments: [],
  },
  isLoading: false,
  error: null,
};

const BASE_URL = 'http://3.39.231.99:8080';

export const __getInstaList = createAsyncThunk(
  "getInstaList",
  async (payload, thunkAPI) => {
    console.log("__getInstaList 동작");
    try {
      const response = await axios({
        method: "get",

        url: `${BASE_URL}/api/articles`,

        headers: {
          "Content-Type": "application/json",
          Authorization: `${getCookie("token")}`,
        },
      });
      console.log(response.data);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// Form 이미지, content post
export const __postImage = createAsyncThunk(
  "POST_FORM",
  async (payload, thunkAPI) => {
    for (var value of payload.values()) {
      console.log("formdata value", value);
    }
    try {
      const response = await axios({
        method: "post",
        url: `${BASE_URL}/api/articles`,
        data: payload,
        headers: {
          "Content-Type": false,
          responseType: "blob",
          Authorization: getCookie('token'),
        },
      });
      console.log(payload);
      console.log("response", response.data);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __editImage = createAsyncThunk(
  "EDIT_IMAGE",
  async(payload, thunkAPI) => {
    try {
      const response = await axios({
        method: "patch",
        url: `${BASE_URL}/api/articles/${payload.articlesId}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `${getCookie("mycookie")}`,
        },
        data: payload,
      })
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __postLike = createAsyncThunk(
  "postLike",
  async (payload, thunkAPI) => {
    try {
      console.log("__postLike payload", payload);

      const response = await axios({
        method: "post",

        url: `${BASE_URL}/api/articles/${payload.articlesId}/like`,

        // url: "http://localhost:3001/like",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${getCookie("token")}`,
        },
        data: payload,
      });
      console.log("response", response.data);
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
          Authorization: `${getCookie("token")}`,
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
          Authorization: `${getCookie("token")}`,
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
        url: `${BASE_URL}/api/articles/${payload}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `${getCookie("token")}`,
        },
      });
      console.log("__deleteInstaCard payload", payload);
      console.log("__deleteInstaCard response.data", response.data);
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
          Authorization: `${getCookie("token")}`,
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
      console.log("__postComments payload", payload);
      const response = await axios({
        method: "post",
        // url: `/api/articles/${("PAYLOAD", payload.articleId)}/comments`,
        url: `http://localhost:3001/comments`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `${getCookie("token")}`,
        },
        data: { comment: payload.comment },
      });
      console.log("response.data", response.data);
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
      console.log("__getInstaList payload", payload);
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
      state.articles.content = payload.content;
    },
    [__updateInstaCard.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload.response.data.error;
    },
    [__deleteInstaCard.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteInstaCard.fulfilled]: (state, { payload }) => {
      console.log("extraReducers payload", payload);
      // console.log("typeof(payload)", typeof payload);
      state.isLoading = false;
      // if (typeof payload.msg == "string") {}
      state.error = payload.msg;
      state.articles = state.articles.filter(
        (val) => val.articlesId !== payload.articlesId
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
      state.articles = payload;
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
      state.article.comments.unshift(payload);
    },
    [__postComments.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload.response.data.error;
    },
    [__postLike.pending]: (state) => {
      state.isLoading = true;
    },
    [__postLike.fulfilled]: (state, { payload }) => {
      console.log("extraReducers payload", state.like, payload);
      state.isLoading = false;
      state.like.unshift(payload);
    },
    [__postLike.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload.response.data.error;
    },

    //Form - post
    [__postImage.pending]: (state) => {
      state.isLoading = true;
    },
    [__postImage.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
    },
    [__postImage.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload.response.data.error;
    },
    [__editImage.pending]: (state) => {
      state.isLoading = true;
    },
    [__editImage.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
    },
    [__editImage.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload.response.data.error;
    },
  },
});

export default InstaSlice;
