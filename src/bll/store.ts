import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {postsReducer} from "./posts-reducer";


const rootReducer = combineReducers({
    posts: postsReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootStateType = ReturnType<typeof rootReducer>;