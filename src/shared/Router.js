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
import { useSelector } from "react-redux";

const Router = () => {

  const token = getCookie('token')
  const { isLogin } = useSelector((state) => state.user);

  console.log(isLogin)
 

  return (
    <BrowserRouter>
    <ScrollToTop>
      <Routes>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/" element={ <MainPage /> }></Route>
        <Route path="/form" element={  <FormPage />}></Route>
        <Route path="/mypage" element={  <MyPage/>}></Route>
      </Routes>
    </ScrollToTop>
    </BrowserRouter>
  );
};

export default Router;
