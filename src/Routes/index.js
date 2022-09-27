import React from "react";
import { Routes, Route } from 'react-router-dom'

import { UserSidebar } from "../components/UserSidebar";
import { useUserContext } from "../contexts/useUserContext";

import { Container } from "./styles";

// import TestPage from "../pages/TestPage";
// import UserTestPage from "../pages/UserTestPage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import EventIndexPage from "../pages/EventIndexPage";
import StageIndexPage from "../pages/StageIndexPage";
import ActivityIndexPage from "../pages/ActivityIndexPage";
import PostIndexPage from "../pages/PostIndexPage";
import PostPage from "../pages/PostPage";
import UserPage from "../pages/UserPage";
import ActivityPage from "../pages/ActivityPage";

const Router = () => {
    const { user } = useUserContext();
    
    if(!user){
        return (
            <Routes>
                <Route path="/*" index element={<LoginPage />} />
                <Route exact path="/login" element={<LoginPage />} />
                <Route exact path="/cadastro" element={<SignUpPage />} />
            </Routes>
        )
    }
    else {
        return (
            <Routes>
                <Route path="/*" element={
                    <Container>
                        <UserSidebar/>
                        <StageIndexPage />
                    </Container>
                } />
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
            </Routes>
        );
    }
}

export default Router;