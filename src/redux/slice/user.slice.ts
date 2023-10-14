import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userData: null,
    },
    reducers: {
        setUserData: (state, action) => {
            state.userData = action.payload;
        },
        logout: (state) => {
            state.userData = null; // Скидання даних користувача при виході
        },
    },
});

const { actions, reducer: userReducer } = userSlice;
const userActions = {
    ...actions,
};

export {
    userActions,
    userReducer
};