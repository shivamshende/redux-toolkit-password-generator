import { createSlice } from '@reduxjs/toolkit';

const historySlice = createSlice({
    name: 'histories',
    initialState: { passwords: [] },
    reducers: {
        addToHistory(state, action) {
            const { id, password } = action.payload;
            state.passwords.push({ id, password });
        },
    },
});


export const { addToHistory } = historySlice.actions;
export default historySlice.reducer;