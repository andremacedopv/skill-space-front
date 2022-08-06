import React from "react";
import { Routes, Route } from 'react-router-dom'

import TestPage from "../pages/TestPage";

const Router = () => {
    return (
        <Routes>
            <Route exact path="/" element={<TestPage />} />
        </Routes>
    );
}

export default Router;