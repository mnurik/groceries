import { LOAD_GROCERY, ADD_GROCERY } from './../constants';

const createAction = ({ type, payload }) => dispatch => dispatch({ type, payload });

export const loadGroceries = (list) => createAction({ type: LOAD_GROCERY, payload: list });
export const addGrocery = (name) => createAction({ type: ADD_GROCERY, payload: name });