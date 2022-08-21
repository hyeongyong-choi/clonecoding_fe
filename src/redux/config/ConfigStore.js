import { configureStore } from "@reduxjs/toolkit";
import InstaSlice from "../modules/InstaSlice";
import UserSlice from "../modules/userSlice";

const store = configureStore({
  reducer: { Insta: InstaSlice.reducer , user : UserSlice.reducer}
});

export default store;
