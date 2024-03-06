import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './slices/favoritesSlice';
import historyReducer from './slices/historySlice';
import themeReducer from './slices/themeSlice'

const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    histories: historyReducer,
    theme: themeReducer
  },
});

export default store;
