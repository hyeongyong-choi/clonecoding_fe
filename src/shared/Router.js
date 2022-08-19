import { Routes, Route, Navigate } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';

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
