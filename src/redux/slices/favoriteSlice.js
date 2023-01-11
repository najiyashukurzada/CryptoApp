import { createSlice } from "@reduxjs/toolkit";

const FavoriteSlice = createSlice ({
    name: 'favorite',
    initialState:{
        coins: []
    },

    reducers:{
        addFavorite: (state, action) => {
            state.coins.push(action.payload)
        },
        removeFromFavorite: (state, action) => {
            state.coins.splice(state.coins.findIndex(coin=>coin.id === action.payload), 1)
        },
        clearFavorite: (state) => {
            state.coins = []
        }
    }
})

export const { addFavorite, removeFromFavorite, clearFavorite } = FavoriteSlice.actions
export default FavoriteSlice;