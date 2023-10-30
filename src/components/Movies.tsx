import React, {FC, useEffect, useState} from 'react';

import Box from "@mui/material/Box";

import {favoritesActions, movieActions} from '../redux';

import {useAppDispatch, useAppSelector} from '../hooks';
import {Grid} from "@mui/material";
import './Movie.css';
import {MoviesListCard} from "./Movie";



const Movies: FC = () => {
    const dispatch = useAppDispatch();
    const {
        movies,
        page,
        filterMovies,
        selectGenre,
        selectYear,
        searchText
    } = useAppSelector((state) => state.movieReducer);
    const { favoriteMovies } = useAppSelector((state) => state.favoritesReducer);

    const [userData] = useState(JSON.parse(localStorage.getItem('userData')));

    useEffect(() => {
        dispatch(favoritesActions.fetchFavorites(userData._id))
    }, [])

    useEffect(() => {
        switch (filterMovies) {
            case 'genres':
                dispatch(movieActions.searchMovieByGenre({ genreIds: selectGenre, page }));
                break;
            case 'years':
                dispatch(movieActions.selectMoviesByYear({ year: +selectYear, page }));
                break;
            case 'search':
                dispatch(movieActions.searchMovies({ searchText, page }));
                break;
            default:
                dispatch(movieActions.getAllMovies(page));
                break;
        }
    }, [dispatch, page, filterMovies, selectGenre, selectYear, searchText]);


    return (
        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <Grid container spacing={4} sx={{display: {xs: 'flex', flexDirection: 'row', md: 'flex'}}}>
                {movies.map((movie) => (
                    <Grid item xs={12} md={3} key={movie.id}>
                        <MoviesListCard isLiked={!!favoriteMovies.find(m => m.movieId == movie.id)} movie={movie}/>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export {Movies};