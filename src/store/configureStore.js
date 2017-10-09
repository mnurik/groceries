import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducers from './../reducer';
import devTools from 'remote-redux-devtools';

const loggerMiddleware = createLogger();

export default (initialState) => {
    return createStore(
        reducers,
        compose(applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        ), devTools())
    );
}
