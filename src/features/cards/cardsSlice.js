import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cards: {}
}

export const cardsSlice = createSlice({
    name: 'cards',
    initialState: initialState,
    reducers: {
        addCard: (state, action) => {
            const {id, front, back} = action.payload;
            const newCard = {
                id: id,
                front: front,
                back: back
            }
            
            return {...state.cards.cards, cards: {...state.cards, [id]: newCard}};
        }
    }
});

// Export state, actions, and reducer
export const selectCards = (state) => state.cards.cards;
export const { addCard } = cardsSlice.actions;
export default cardsSlice.reducer;