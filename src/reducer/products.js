import { ADD_GROCERY } from './../constants';

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_GROCERY:
            return [...state, action.payload]
        default:
            return state;
    }
};