import React, {FC} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {Box} from "@mui/material";

import {MovieInfoPage} from "./pages/MoviePage/MovieInfoPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import {ProfilePage} from "./pages/ProfilePage/ProfilePage";
import {MainLayout} from "./layouts";
import {HomePage} from "./pages";

import './App.css';


const App: FC = () => {
    return (
        <Box>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    {/*<Route index element={<Navigate to={'movie'}/>}/>*/}
                    <Route index element={<Navigate to={'/login'}/>}/>
                    <Route path={'/login'} element={<LoginPage/>}/>
                    <Route path={'/register'} element={<RegisterPage/>}/>
                    <Route path={'/profile'} element={<ProfilePage/>}/>
                    <Route path={'movie'} element={<HomePage/>}/>
                    <Route path={'movie/:id'} element={<MovieInfoPage/>}/>
                </Route>
            </Routes>
        </Box>
    );
};

export default App;