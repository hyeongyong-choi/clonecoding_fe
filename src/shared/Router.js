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

const Router = () => {
  return (
    <BrowserRouter>
    <ScrollToTop>
      <Routes>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>

        <Route path="/" element={ <MainPage />}></Route>
        {/* <Route path="/" element={ !getCookie('token')? <Navigate replace to = "/login" />:  <MainPage />}></Route> */}
        <Route path="/form" element={!getCookie('token')? <Navigate replace to = "/login" />:<FormPage />}></Route>
        <Route path="/mypage" element={!getCookie('token')? <Navigate replace to = "/login" />:<MyPage/>}></Route>

      </Routes>
    </ScrollToTop>
    </BrowserRouter>
  );
};

export default Router;
