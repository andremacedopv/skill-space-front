import React from "react";
import { Routes, Route } from 'react-router-dom'

import { UserSidebar } from "../components/UserSidebar";

import { Container } from "./styles";

import TestPage from "../pages/TestPage";
import LoginPage from "../pages/LoginPage";
import UserTestPage from "../pages/UserTestPage";
import EventIndexPage from "../pages/EventIndexPage";

const Router = () => {
    return (
        <Routes>
            <Route exact path="/event" element={
                <Container>
                    <UserSidebar/>
                    <EventIndexPage />
                </Container>
            } />
            <Route exact path="/" element={< TestPage />} />
            <Route exact path="/user" element={< UserTestPage />} />
            <Route exact path="/login" element={<LoginPage />} />
        </Routes>
    );
}

export default Router;