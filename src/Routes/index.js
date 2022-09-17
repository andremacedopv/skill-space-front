import React from "react";
import { Routes, Route } from 'react-router-dom'

import { UserSidebar } from "../components/UserSidebar";

import { Container } from "./styles";

import TestPage from "../pages/TestPage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import UserTestPage from "../pages/UserTestPage";
import EventIndexPage from "../pages/EventIndexPage";
import StageIndexPage from "../pages/StageIndexPage";
import ActivityIndexPage from "../pages/ActivityIndexPage";

const Router = () => {
    return (
        <Routes>
            <Route exact path="/event" element={
                <Container>
                    <UserSidebar/>
                    <EventIndexPage />
                </Container>
            } />
            <Route exact path="/stage" element={
                <Container>
                    <UserSidebar/>
                    <StageIndexPage />
                </Container>
            } />
            <Route exact path="/stage/:id" element={
                <Container>
                    <UserSidebar/>
                    <ActivityIndexPage />
                </Container>
            } />
            <Route exact path="/" element={< TestPage />} />
            <Route exact path="/user" element={< UserTestPage />} />
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/cadastro" element={<SignUpPage />} />
        </Routes>
    );
}

export default Router;