import { ADD_GROCERY } from './../constants';

const createAction = ({ type, payload }) => dispatch => dispatch({ type, payload });

export const addGrocery = (name) => createAction({ type: ADD_GROCERY, payload: name });