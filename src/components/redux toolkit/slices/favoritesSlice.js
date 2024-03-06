import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: { passwords: [] },
    reducers: {
        addToFavorites(state, action) {
            const { id, password } = action.payload;
            state.passwords.push({ id, password });
        },
    },
});


export const { addToFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;