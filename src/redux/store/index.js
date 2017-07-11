import { createStore, combineReducer, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

let store = createStore(function(){});
export default store;