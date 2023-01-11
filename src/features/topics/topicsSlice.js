import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    topics: {}
}


export const topicsSlice = createSlice({
    name: 'topics',
    initialState: initialState,
    reducers: {
        addTopic: (state, action) => {
            const {id, name, icon} = action.payload;
            const newTopic = {
                id: id, 
                name: name,
                icon: icon,
                quizIds: []
            }
            return {...state.topics.topics, topics: {...state.topics, [id]: newTopic}}
        },

        addQuizId: (state, action) => {
            const {quizId, topicId} = action.payload;
            state.topics.[topicId].quizIds.push(quizId);
}}});


//Export of state, actions, and reducer
export const selectTopics = (state) => state.topics.topics;
export const {addTopic, addQuizId} = topicsSlice.actions;
export default topicsSlice.reducer;