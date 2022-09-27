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
import PostIndexPage from "../pages/PostIndexPage";
import PostPage from "../pages/PostPage";
import UserPage from "../pages/UserPage";
import ActivityPage from "../pages/ActivityPage";

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
            <Route exact path="/activity/:id" element={
                <Container>
                    <UserSidebar/>
                    <ActivityPage />
                </Container>
            } />
            <Route exact path="/post" element={
                <Container>
                    <UserSidebar/>
                    <PostIndexPage />
                </Container>
            }/>
            <Route exact path="/post/:id" element={
                <Container>
                    <UserSidebar/>
                    <PostPage />
                </Container>
            }/>
            <Route exact path="/post/user/:id" element={
                <Container>
                    <UserSidebar/>
                    <UserPage/>
                </Container>
            }/>
            <Route exact path="/" element={< UserTestPage />} />
            <Route exact path="/test" element={< TestPage />} />
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/cadastro" element={<SignUpPage />} />
        </Routes>
    );
}

export default Router;