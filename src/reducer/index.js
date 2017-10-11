import { combineReducers } from 'redux';
import navigate from './nav';
import products from './products';

export default combineReducers({
    navigate,
    products
});