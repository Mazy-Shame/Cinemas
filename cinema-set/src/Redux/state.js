import {applyMiddleware, combineReducers, createStore} from 'redux'
import { UserReducer } from './UserReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const reducers = combineReducers({
    UserReducer
})

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

export default store;