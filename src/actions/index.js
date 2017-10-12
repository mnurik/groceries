import {
    LOAD_GROCERY,
    ADD_GROCERY,
    ACQUIRE_GROCERY,
    CANCEL_ACQUIRE_GROCERY,
    DELETE_GROCERY
} from './../constants';

const createAction = ({ type, payload }) => dispatch => dispatch({ type, payload });

export const loadGroceries = (payload) => createAction({ type: LOAD_GROCERY, payload });
export const addGrocery = (payload) => createAction({ type: ADD_GROCERY, payload });
export const acquiringGroceries = (id) => createAction({ type: ACQUIRE_GROCERY, payload: { id } });
export const cancelAcquiringGroceries = (id) => createAction({ type: CANCEL_ACQUIRE_GROCERY, payload: { id } });
export const deleteGrocery = (id) => createAction({ type: DELETE_GROCERY, payload: { id } });