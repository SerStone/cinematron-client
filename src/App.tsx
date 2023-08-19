import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import {UserDetailedPage} from "./pages/UserDetailedPage";
import {UsersPage} from "./pages/UsersPage";
import {MainLayout} from "./layouts/MainLayout";
import {Post} from "./components/Posts/Post";
import {CommentPage} from "./pages/CommentPage";
import Albums from "./components/Albums/Albums";
import {Posts} from "./components/Posts/Posts";


const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'users'}/>}/>
                <Route path={'users'} element={<UsersPage/>}>
                    <Route path={':id'} element={<UserDetailedPage/>}/>
                </Route>
                <Route path={'albums'} element={<Albums/>}/>
                <Route path={'comments'} element={<CommentPage/>}>
                    <Route path={':postId'} element={<Post/>}/>
                </Route>
                <Route path={'posts'} element={<Posts/>}/>
            </Route>
        </Routes>
    );
};

export default App;