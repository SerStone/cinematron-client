import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {genreReducer, movieReducer, favoritesReducer} from "./slice";
// @ts-ignore
import {userReducer} from './slice/user.slice'

const rootReducer = combineReducers({
    movieReducer,
    genreReducer,
    favoritesReducer,
    user: userReducer,
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

type RootState = ReturnType<typeof rootReducer>
type AppStore = ReturnType<typeof setupStore>
type AppDispatch = AppStore['dispatch']

export type {
    RootState,
    AppStore,
    AppDispatch
};

export {
    setupStore
};

