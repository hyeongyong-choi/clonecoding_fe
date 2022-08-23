import { configureStore } from "@reduxjs/toolkit";
import InstaSlice from "../modules/InstaSlice";
import MyPageSlice from "../modules/MyPageSlice";
import UserSlice from "../modules/userSlice";


const store = configureStore({
  reducer: {
    Insta: InstaSlice.reducer,
    user: UserSlice.reducer,
    myPage: MyPageSlice.reducer,
  }
});

export default store;
