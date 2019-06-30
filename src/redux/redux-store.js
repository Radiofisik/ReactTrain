import postsReducer from "./post-reducer";
import {combineReducers, createStore} from "redux";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    postsPage: postsReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);
window.store = store;
export default store;
