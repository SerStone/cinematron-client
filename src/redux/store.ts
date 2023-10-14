import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {genreReducer, movieReducer} from "./slice";
// @ts-ignore
import {userReducer} from './slice/user.slice'

const rootReducer = combineReducers({
    movieReducer,
    genreReducer,
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

