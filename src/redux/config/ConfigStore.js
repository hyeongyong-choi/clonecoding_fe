import { configureStore } from "@reduxjs/toolkit";
import InstaSlice from "../modules/InstaSlice";

const store = configureStore({
  reducer: { Insta: InstaSlice.reducer },
});

export default store;
