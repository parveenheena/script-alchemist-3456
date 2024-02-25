import {createStore, applyMiddleware, combineReducers} from 'redux';
import {thunk} from'redux-thunk';
import userReducer from './userActionAndReducer/reducer';

const rootReducer = combineReducers({
    user: userReducer
});

const middleware = applyMiddleware(thunk);

const store = createStore(rootReducer, middleware);

export default store;