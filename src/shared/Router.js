import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Navigate } from "react-router-dom";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import MainPage from "../pages/MainPage";
import FormPage from "../pages/FormPage";
import MyPage from "../pages/MyPage";
import { getCookie, setCookie } from "./cookies";
import ScrollToTop from './ScrollToTop';
import { useSelector, useDispatch } from "react-redux";
import { __getUser } from '../redux/modules/userSlice';

const Router = () => {

  const dispatch = useDispatch();
  const { isLogin } = useSelector((state) => state.user);
  const token = getCookie("token")

  // console.log(isLogin)

  return (
    <BrowserRouter>
    <ScrollToTop>
      <Routes>
          <Route path="/" element={token ? <MainPage /> : <Navigate to="/login" />}></Route>
          <Route path="/login" element={token ? <Navigate to="/" /> : <LoginPage />}></Route>
          <Route path="/register" element={token ? <Navigate to="/" /> : <RegisterPage />}></Route>
          <Route path="/form" element={token ? <FormPage /> : <Navigate to="/login" />}></Route>
          <Route path="/mypage" element={token ? <MyPage /> : <Navigate to="/login" />}></Route>
      </Routes>
    </ScrollToTop>
    </BrowserRouter>
  );
};

export default Router;