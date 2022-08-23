import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Navigate } from "react-router-dom";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import MainPage from "../pages/MainPage";
import FormPage from "../pages/FormPage";
import MyPage from '../pages/MyPage';
import { setCookie } from "./cookies";

const Router = () => {

 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/form" element={<FormPage />}></Route>
        <Route path="/mypage" element={<MyPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
