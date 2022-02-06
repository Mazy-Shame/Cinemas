import {applyMiddleware, combineReducers, createStore} from 'redux'
import { UserReducer } from './UserReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import NavBarReducer from './NavBarReducer';

const reducers = combineReducers({
    UserReducer, NavBarReducer
})


const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

export default store;