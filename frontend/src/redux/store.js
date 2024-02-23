import {createStore, applyMiddleware, combineReducers} from 'redux';
import {thunk} from'redux-thunk';
import {logger} from'redux-logger';
import userReducer from './userActionAndReducer/reducer';

const rootReducer = combineReducers({
    user: userReducer
});

const middleware = applyMiddleware(thunk,logger);

const store = createStore(rootReducer, middleware);

export default store;