import postsReducer from "./post-reducer";
import {combineReducers, createStore} from "redux";

let reducers = combineReducers({
    postsPage: postsReducer
});

let store = createStore(reducers);

export default store;
