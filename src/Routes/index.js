import React from "react";
import { Routes, Route } from 'react-router-dom'

import TestPage from "../pages/TestPage";
import LoginPage from "../pages/LoginPage";
import UserTestPage from "../pages/UserTestPage";

const Router = () => {
    return (
        <Routes>
            <Route exact path="/" element={< TestPage />} />
            <Route exact path="/user" element={< UserTestPage />} />
            <Route exact path="/login" element={<LoginPage />} />
        </Routes>
    );
}

export default Router;