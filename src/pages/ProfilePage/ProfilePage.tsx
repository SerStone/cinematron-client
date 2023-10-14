import React, {FC, useEffect, useState} from 'react';
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import {Typography} from "@mui/material";
import {useAppSelector} from "../../hooks";
import {IUser} from "../../interfaces/user.interface";

const ProfilePage: React.FC = () => {
    const [userData, setUserData] = useState<IUser | null>(null);

    useEffect(() => {
        const loggedInUser = localStorage.getItem('userData');
        if (loggedInUser) {
            const parsedUserData = JSON.parse(loggedInUser);
            setUserData(parsedUserData);
        }
    }, []);

    return (
        <Container maxWidth="md">
            <Paper elevation={3} style={{ padding: '20px', margin: '20px 0' }}>
                <Typography variant="h4">{userData?.name || 'N/A'}</Typography>
                <Typography variant="subtitle1">Age: {userData?.age || 'N/A'}</Typography>
                <Typography variant="subtitle1">Status: {userData?.status || 'N/A'}</Typography>
                <Typography variant="subtitle1">Email: {userData?.email || 'N/A'}</Typography>
                {/* Додайте інші поля профілю, такі як createdAt, updatedAt, gender тощо */}
            </Paper>
        </Container>
    );
};

export { ProfilePage };