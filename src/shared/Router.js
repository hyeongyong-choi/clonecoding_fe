import { Routes, Route, Navigate } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import RegisterPage from '../pages/RegisterPage'
import LoginPage from '../pages/LoginPage'
import MainPage from '../pages/MainPage'

const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/register' element={<RegisterPage />}></Route>
                <Route path='/login' element={<LoginPage />}></Route>
                <Route path='/' element={<MainPage />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router
