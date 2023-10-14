import React, {FC, useState} from 'react';
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {authService} from "../../services/auth.service";
import {IUser} from "../../interfaces/user.interface";
import {Box, Button, TextField, Typography} from "@mui/material";

const RegisterPage: FC = () => {

    const [formData, setFormData] = useState({
        name: '',
        age: '',
        gender: '',
        email: '',
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            // Send registration data to the backend using authService.register()
            const response = await authService.register(formData);

            // Handle the response from the backend if needed
            console.log('Registration successful:', response.data);
        } catch (error) {
            // Handle any errors that occur during the registration process
            console.error('Registration error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
            />
            <TextField
                label="Age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                fullWidth
            />
            <TextField
                label="Gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                fullWidth
            />
            <TextField
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
            />
            <TextField
                label="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                fullWidth
            />
            <Button type="submit" variant="contained" color="primary">
                Register
            </Button>
        </form>
    );
};

export default RegisterPage;