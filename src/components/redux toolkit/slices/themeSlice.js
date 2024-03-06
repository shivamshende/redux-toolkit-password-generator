import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    theme: 'dark', // 'dark', 'red', 'purple', 'yellow', or 'gray'
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme(state, action) {
            state.theme = action.payload;
        },
    },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
