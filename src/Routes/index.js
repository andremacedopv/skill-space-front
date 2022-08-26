import React from "react";
import { Routes, Route } from 'react-router-dom'

import TestPage from "../pages/TestPage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import UserTestPage from "../pages/UserTestPage";

const Router = () => {
    return (
        <Routes>
            <Route exact path="/" element={< TestPage />} />
            <Route exact path="/user" element={< UserTestPage />} />
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/cadastro" element={<SignUpPage />} />
        </Routes>
    );
}

export default Router;