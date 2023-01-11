import { createSlice} from "@reduxjs/toolkit";
import { addQuizId } from "../topics/topicsSlice";

const initialState = {
    quizzes: {}
}


const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: initialState,
    reducers: {
        addQuiz: (state, action) => {
            const {id, name, topicId, cardIds} = action.payload;
            const newQuiz = {
                id: id,
                topidcId: topicId,
                name: name,
                cardIds: cardIds
            }
            return {...state.quizzes.quizzes, quizzes: {...state.quizzes, [id]: newQuiz}};
        }  
    }

});

// Thunk to create a quiz and add the quiz ID to the topic state
export const createQuiz = quiz => {
    const {id, name, topicId, cardIds} = quiz;
    return (dispatch) => {

        dispatch(addQuiz({
            id: id,
            name: name,
            topicId: topicId,
            cardIds: cardIds
          }));

        dispatch(addQuizId({
            quizId: id,
            topicId: topicId
        }));
    }
}

//Exports of state, actions, and reducer
export const selectQuizzes = (state) => state.quizzes.quizzes;
export const {addQuiz} = quizzesSlice.actions;
export default quizzesSlice.reducer;