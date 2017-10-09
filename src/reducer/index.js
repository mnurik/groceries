import { combineReducers } from 'redux';
import navigate from './nav';
import product from './product';

export default combineReducers({
    navigate,
    product
});