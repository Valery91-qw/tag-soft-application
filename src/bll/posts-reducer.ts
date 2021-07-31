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

export const setPosts = (posts: Array<any>) => ({type: SET_POSTS, posts} as const);

type SetPostsType = ReturnType<typeof setPosts>

type ActionType = SetPostsType;


export type PostsStateType = {
    posts: Array<any>
}
