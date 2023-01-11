import { configureStore } from '@reduxjs/toolkit'
import FavoriteSlice from './slices/favoriteSlice'

export const store = configureStore({
    reducer:{
        favorite: FavoriteSlice.reducer
    }
})