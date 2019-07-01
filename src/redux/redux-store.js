import postsReducer from "./post-reducer";
import {combineReducers, createStore, applyMiddleware} from "redux";
import usersReducer from "./users-reducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    postsPage: postsReducer,
    usersPage: usersReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;
