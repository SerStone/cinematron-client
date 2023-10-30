import React, {useEffect, useState} from "react";
import {MoviesListCard} from "../../components/Movie";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {favoritesActions, movieActions} from "../../redux";
import {Box, Grid} from "@mui/material";
import styles from './FavoritesPage.module.css';

export const FavoritesPage: React.FC = () => {
    const dispatch = useAppDispatch();

    const { page, totalPages } = useAppSelector((state) => state.movieReducer);
    const { movies } = useAppSelector((state) => state.movieReducer);
    const { favoriteMovies } = useAppSelector((state) => state.favoritesReducer);

    const [userData] = useState(JSON.parse(localStorage.getItem('userData')));

    console.log(favoriteMovies);

    useEffect(() => {
        dispatch(favoritesActions.fetchFavorites(userData._id))
    }, [])

  return (
      <>
          <h1 className={styles.title}>Your favorite movies in one place</h1>
          <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
              <Grid container spacing={4} sx={{display: {xs: 'flex', flexDirection: 'row', md: 'flex'}}}>
                  {favoriteMovies.map(m => {
                          return (<Grid item xs={12} md={3} key={m.movieId}>
                              <MoviesListCard
                                  isLiked={!!favoriteMovies.find(movie => m.movieId === movie.movieId)}
                                  movie={{
                                      id: m.movieId,
                                      poster_path: m.poster_path,
                                      vote_average: m.vote_average,
                                      release_date: m.release_date,
                                      title: m.title,
                              }}
                              />
                          </Grid>)
                      })
                  }
              </Grid>
          </Box>
      </>
  )
}