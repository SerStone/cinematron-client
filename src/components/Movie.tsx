import {FC, useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";

import moment from "moment";
import {StarsRating} from "./StarsRating";

import {baseImageURL, notImg} from "../constants";
import {IMovie} from "../interfaces";

import {Box, Card, CardContent, CardMedia, Typography, useTheme} from '@mui/material';

import heart from '../images/heart.svg';
import heartOutline from '../images/heart-outline.svg';
import {FavoritesService} from "../services/favorites.service";
import {useAppDispatch} from "../hooks";
import {favoritesActions} from "../redux";


interface IProps {
    movie: Partial<IMovie>;
    isLiked: boolean;
}

const MoviesListCard: FC<IProps> = ({movie, isLiked}) => {
    const {title, poster_path, vote_average, release_date, id} = movie;

    const date = moment(release_date).format("DD MMM YYYY");
    const baseImageURL = 'https://image.tmdb.org/t/p/w500/';
    const imgUrl = poster_path ? `${baseImageURL}${poster_path}` : `${notImg}`;
    const theme = useTheme();

    const [userData] = useState(JSON.parse(localStorage.getItem('userData')));

    const dispatch = useAppDispatch();

    const onLikeClick = async () => {
      if (isLiked) {
          await dispatch(favoritesActions.removeFavorite({userId: userData._id, movieId: id}));
      } else {
          await dispatch(favoritesActions.addFavorite({userId: userData._id, movie: {
              movieId: id,
                  poster_path,
                  vote_average,
                  release_date: release_date.toString(),
                  title,
              }}));
      }
    }

    return (
        <NavLink to={id.toString()} state={{...movie}}>
            <Card sx={{maxHeight: 600, position: 'relative', cursor: 'pointer'}}>
                <CardMedia
                    component="img"
                    height="420"
                    image={imgUrl}
                    alt={title}
                />
                <CardContent
                    sx={{
                        backgroundColor: theme.palette.secondary.main,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: 1,
                    }}
                >
                    <Box sx={{
                        height: {xs: 50, md: 64},
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        < Typography variant="body1" color="text.primary" sx={{
                            textAlign:'center',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                        }}>
                            {title}
                            <img
                                onClick={async (event) => {
                                    event.preventDefault();
                                    event.stopPropagation();
                                    await onLikeClick();
                                }}
                                alt="heart"
                                src={isLiked ? heart : heartOutline}
                                className="movie__like-btn"/>
                        </Typography>
                        <Typography color="text.primary" sx={{mb:'7px'}}>
                            {date}
                        </Typography>

                        <StarsRating rating={Number(vote_average)} />
                    </Box>
                </CardContent>
            </Card>
        </NavLink>
    );
};

export {MoviesListCard};