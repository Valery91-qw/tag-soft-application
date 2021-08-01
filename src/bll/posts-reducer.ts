import {RootStateType} from "./store";
import {ThunkAction} from "redux-thunk";
import {postsApi} from "../dal/pasts-api";

const SET_POSTS = 'SET_POSTS';

export const initialState: PostsStateType = {
    posts: []
}

export const postsReducer = (state = initialState, action: ActionType): PostsStateType => {
    switch (action.type) {
        case SET_POSTS : {
            return {...state, posts: [...action.posts]}
        }
        default : return state
    }
}

export const setPosts = (posts: Array<PostType>) => ({type: SET_POSTS, posts} as const);


export const getPosts = ():ThunkType => {
    return async (dispatch) => {
        try {
            const posts = await postsApi.getPosts()
            dispatch(setPosts(posts))
        } catch (e) {

        }
    }

}
export type PostType = {
    userId: number
    id: number
    title: string
    body: string
}

type ThunkType = ThunkAction<void, RootStateType, unknown, ActionType>

type SetPostsType = ReturnType<typeof setPosts>

type ActionType = SetPostsType

export type PostsStateType = {
    posts: Array<any>
}
