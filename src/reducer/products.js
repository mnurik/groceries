import { LOAD_GROCERY, ADD_GROCERY } from './../constants';

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_GROCERY:
            return action.payload;
        case ADD_GROCERY:
            return [...state, action.payload]
        default:
            return state;
    }
};