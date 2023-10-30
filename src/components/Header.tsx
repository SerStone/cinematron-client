import React, {FC, useEffect, useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";

import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import {Switcher} from "./Switcher";

import {Grid} from "@mui/material";

import './Header.css'
import {IUser} from "../interfaces/user.interface";
import {useAppSelector} from "../hooks";
import {LogoutButton} from "./LogoutButton";

interface IProps {
    switcher: () => void;
    userData: IUser;
}

const Header: FC<IProps> = ({switcher}) => {
    const settings = ['Favorites'];
    const authSettingsLogin =  'Login';
    const authSettingsRegister =  'Register';
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
    const navigate = useNavigate();
    const userData = useAppSelector((state) => state.user.userData);
    // const [userName, setUserName] = useState(userData?.name);
    const [localStorageLoaded, setLocalStorageLoaded] = useState(false);
    const [showLogoutComponent, setShowLogoutComponent] = useState(false);
    const [userName, setUserName] = useState(() => {
        // Використовуйте попередній стан (previous state) для ініціалізації
        // якщо userData ще не завантажено
        return userData?.name || 'Guest';
    });

    useEffect(() => {
        const loggedInUser = localStorage.getItem('userData');
        if (loggedInUser) {
            setLocalStorageLoaded(true);
        }
    }, []);

    useEffect(() => {
        if (userData) {
            setUserName(userData.name);
        }
    }, [userData]);
    useEffect(() => {
        if (localStorageLoaded) {
            localStorage.setItem('localStorageLoaded', 'true');
        }
    }, [localStorageLoaded]);

    useEffect(() => {
        const localStorageLoaded = localStorage.getItem('localStorageLoaded') === 'true';
        setLocalStorageLoaded(localStorageLoaded);
    }, []);
    useEffect(() => {
        const loggedInUser = localStorage.getItem('userData');
        if (loggedInUser) {
            setLocalStorageLoaded(true);
            // Встановіть userName інформацію з localStorage
            setUserName(JSON.parse(loggedInUser).name);
        }
    }, []);



    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
        window.location.href = '/favorites';
    };

    // Додайте обробник для логауту, який скидає значення userName до "Guest"
    const handleLogout = () => {
        // Очистіть дані в localStorage
        localStorage.removeItem('userData');
        // Скиньте ім'я користувача до "Guest"
        setUserName('Guest');
        // Додайте інші дії, які повинні бути виконані після логауту
        // ...
    };

    return (
        <AppBar position="static" className={'css.Header'} sx={{filter: 'drop-shadow(-14px 4px 15px #000)'}}>
            <Container maxWidth="lg">
                <Toolbar disableGutters sx={{display: {xs: 'none', md: 'flex', justifyContent: 'space-around'}, mr: 1}}>
                    <Grid container spacing={2} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <Grid item xs={12} md={2} sx={{display: 'flex', alignItems: 'center'}}>
                            <Box sx={{display: {xs: 'none', md: 'flex'}}}>
                                <Switcher switcher={switcher}/>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={8} sx={{display: 'flex', justifyContent: 'center'}}>
                            <Box sx={{display: 'flex', alignItems: 'center'}}>
                                <LocalMoviesIcon sx={{fontSize: '34px'}}/>
                                <Typography
                                    variant="h5"
                                    noWrap
                                    component="a"
                                    href="/movie"
                                    sx={{
                                        mr: 2,
                                        display: {xs: 'none', md: 'flex'},
                                        fontFamily: 'monospace',
                                        fontWeight: 700,
                                        letterSpacing: '.3rem',
                                        color: 'inherit',
                                        textDecoration: 'none',
                                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
                                    }}>
                                    CinemaTron
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={2} sx={{display: 'flex', alignItems: 'center'}}>
                            <Box sx={{flexGrow: 1, display: 'flex', justifyContent: 'flex-end'}}>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{p: 0, display: 'flex'}}>
                                        <Typography sx={{ color: 'silver', marginRight: 2 }}>
                                            {localStorageLoaded ? userName || 'Guest' : null}
                                        </Typography>
                                        <Avatar alt="avatar"
                                                src="https://www.boxofficepro.com/wp-content/uploads/2022/12/Avatar-The-Way-of-Water-Loak-883x1024.jpg"/>
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{mt: '45px'}}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    {settings.map((setting) => (
                                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                            <Typography textAlign="center">{setting}{authSettingsLogin}{authSettingsRegister}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                        </Grid>
                    </Grid>
                </Toolbar>

                <Toolbar sx={{display: {xs: 'flex', md: 'none'}, justifyContent: 'space-between', padding: '0 5px'}}>
                    <Grid container spacing={2} sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                        <Grid item xs={2} sx={{display: 'flex', alignItems: 'center'}}>
                            <Box sx={{ display: 'flex'}}>
                                <IconButton
                                    size="medium"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenUserMenu}
                                    color="inherit"
                                >
                                    <MenuIcon/>
                                </IconButton>
                                <Menu
                                    sx={{mt: '45px'}}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    {settings.map((setting) => (
                                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                            <Typography textAlign="center">{setting}</Typography>
                                        </MenuItem>
                                    ))}
                                    <MenuItem onClick={() => navigate('/profile')}>
                                        <Typography textAlign="center">Profile</Typography>
                                    </MenuItem>
                                        <div className={'css.btns'}>
                                    <button onClick={() => navigate('/login')}>Login</button>
                                    <button onClick={() => navigate('/register')}>Register</button>
                                            <button onClick={handleLogout}>Logout</button>

                                </div>
                                </Menu>
                            </Box>
                        </Grid>
                        <Grid item xs={8}  sx={{display: 'flex', alignItems: 'center'}}>
                            <LocalMoviesIcon
                                sx={{
                                    display: {xs: 'flex', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',},
                                    mr: 1
                                }}/>
                            <Typography
                                variant="body1"
                                noWrap
                                component="a"
                                href="/"
                                sx={{
                                    mr: 2,
                                    display: 'flex',
                                    flexGrow: 1,
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
                                }}>
                                MoVoK
                            </Typography>
                        </Grid>
                        <Grid item xs={2} sx={{display: 'flex', alignItems: 'center'}}>
                            <Box>
                                <Switcher switcher={switcher}/>
                            </Box>
                        </Grid>
                    </Grid>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export {Header};