import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    totalPages: 0,
    currentPage: 1,
    searchValue: '',
    currentGenre: 0
};

const filterSlice = createSlice({
    name: 'filterSlice',
    initialState,
    reducers: {
        setTotalPages(state, action) {
            state.totalPages = action.payload;
        },
        setCurrentPage(state, action) {
            state.currentPage = action.payload;
        },
        setSearchValue(state, action) {
            state.searchValue = action.payload;
        },
        setGenre(state, action) {
            state.currentGenre = action.payload;
        },

    }
});

const {reducer: filterReducer, actions: { setTotalPages,setSearchValue, setCurrentPage, setGenre}} = filterSlice;

const filterActions = {
    setTotalPages,
    setCurrentPage,
    setSearchValue,
    setGenre
};


export {filterReducer, filterActions};