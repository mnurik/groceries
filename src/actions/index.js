import { ADD_GROCERY } from './../constants';

export const addGrocery = (name) => ({ type: ADD_GROCERY, payload: name });