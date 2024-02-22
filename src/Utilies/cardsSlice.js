import { createSlice } from "@reduxjs/toolkit";

const cardsSlice = createSlice({
    name: "card",
    initialState: {
        cards: null
    },
    reducers: {
        getCards: (state, action) => {
            state.cards = [...action.payload];
            
        }
    }
});

export const { getCards } = cardsSlice.actions;

export default cardsSlice.reducer;
