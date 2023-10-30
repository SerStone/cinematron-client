import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {FavoritesService} from "../../services/favorites.service";

interface IState {
    favoriteMovies: {
        movieId: number;
        release_date: Date;
        title: string;
        poster_path?: string | null;
        vote_average?: number;
    }[];
}

const initialState: IState = {
    favoriteMovies: []
}

export const fetchFavorites = createAsyncThunk('favorites/fetchFavorites', async (userId: string) => {
    try {
        return await FavoritesService.getByUserId(userId);
    } catch (error) {
        throw error;
    }
});

export const addFavorite = createAsyncThunk(
    'favorites/addFavorite',
    async (data: {userId: string; movie: {
            movieId: number;
            release_date?: string;
            title: string;
            poster_path?: string | null;
            vote_average?: number;
        }}, { dispatch }) => {
        try {
            await FavoritesService.addMovieToFavorites(data.userId, data.movie)

            dispatch(fetchFavorites(data.userId));
        } catch (error) {
            throw error;
        }
    }
);

export const removeFavorite = createAsyncThunk(
    'favorites/removeFavorite',
    async (data: {userId: string; movieId: number}, { dispatch }) => {
        try {
            await FavoritesService.removeMovieFromFavorites(data.userId, data.movieId)

            dispatch(fetchFavorites(data.userId));
        } catch (error) {
            throw error;
        }
    }
);


const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(fetchFavorites.fulfilled, (state, action) => {
                // @ts-ignore
                state.favoriteMovies = action.payload;
            })
});

const {actions, reducer: favoritesReducer} = favoritesSlice;

const favoritesActions = {
    ...actions,
    fetchFavorites,
    addFavorite,
    removeFavorite,
};

export {
    favoritesActions,
    favoritesReducer
};