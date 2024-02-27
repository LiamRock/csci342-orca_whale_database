import { createSlice } from "@reduxjs/toolkit";

const initialUserState = {
    userName: '',
    email: '',
}
const initialState = {
    user: initialUserState,
    loaded: false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // login action
        login: (state, action) => {
            state.user = action.payload;
            state.loaded = true;
        },
        // logout action
        logout: (state) => {
            state.user = initialUserState;
            state.loaded = false;
        },
        // loader action
        loader: (state, action) => {
            state.loaded = action.payload;
        }
    },
})

// Action creators are generated for each case reducer function
export const { login, logout, loader } = authSlice.actions

export default authSlice.reducer