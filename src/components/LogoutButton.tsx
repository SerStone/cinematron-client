import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userActions } from '../redux'; // Import your logout action

const LogoutButton: FC = () => {
    const navigate = useNavigate(); // Use useNavigate instead of useHistory
    const dispatch = useDispatch();

    const handleLogout = () => {
        // Remove user data from localStorage
        localStorage.removeItem('userData');

        // Perform any necessary logout actions (e.g., log out from the server or clear authentication tokens)

        // Dispatch the logout action (replace userActions.logout with your actual logout action)
        dispatch(userActions.logout());

        // Redirect the user to the login page or any other desired page
        navigate('/login'); // Use navigate instead of history.push
    };

    return <button onClick={handleLogout}>Logout</button>;
};

export { LogoutButton };