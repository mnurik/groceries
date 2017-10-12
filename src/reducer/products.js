import {
    LOAD_GROCERY,
    ADD_GROCERY,
    ACQUIRE_GROCERY,
    CANCEL_ACQUIRE_GROCERY,
    DELETE_GROCERY
} from './../constants';

const initialState = [];

const findIndex = (state, id) => state.findIndex(item => item.id === id);

export default (state = initialState, action) => {
    switch (action.type) {
        case ACQUIRE_GROCERY:
            return state.map(product => {
                if (product.id === action.payload.id) {
                    product.acquired = true;
                }
                return product;
            });
        case CANCEL_ACQUIRE_GROCERY:
            return state.map(product => {
                if (product.id === action.payload.id) {
                    product.acquired = false;
                }
                return product;
            });
        case LOAD_GROCERY:
            return action.payload;
        case ADD_GROCERY:
            return [...state, action.payload];
        case DELETE_GROCERY:
            return state.filter(product => product.id !== action.payload.id);
        default:
            return state;
    }
};