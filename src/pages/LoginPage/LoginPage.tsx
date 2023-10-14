import React, { FC, useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { authService } from "../../services/auth.service";
import {IUser} from "../../interfaces/user.interface";
import {useAppDispatch} from "../../hooks";
import {userActions} from "../../redux";
import {useNavigate} from "react-router-dom";

interface FormData {
    email: string;
    password: string;
}



const LoginPage: FC = () => {

    const dispatch = useAppDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const [userData, setUserData] = useState<IUser | null>(null); // Дані користувача
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        try {
            // @ts-ignore
            const response = await authService.login(data);
            const { accessToken, refreshToken, user } = response.data;
            dispatch(userActions.setUserData(user));

            localStorage.setItem('userData', JSON.stringify(user));

            navigate('/movie');

        } catch (error) {
            console.error('Помилка входу:', error);
        }
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" align="center" gutterBottom>
                Вхід
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    label="Email"
                    type="text"
                    fullWidth
                    {...register("email", { required: true })}
                />
                {errors.email && <Typography color="error">Це поле обов'язкове</Typography>}
                <TextField
                    label="Password"
                    type="password"
                    fullWidth
                    {...register("password", { required: true })}
                />
                {errors.password && <Typography color="error">Це поле обов'язкове</Typography>}
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ mt: 2 }}
                >
                    Login
                </Button>
            </form>

            {userData && (
                <div>
                    <Typography variant="h5" align="center" gutterBottom>
                        Дані користувача:
                    </Typography>
                    <pre>{JSON.stringify(userData, null, 2)}</pre>
                </div>
            )}

        </Container>
    );
};

export default LoginPage;