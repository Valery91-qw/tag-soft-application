import {postsReducer, PostsStateType, setPosts} from "./posts-reducer";


let startState: PostsStateType;

beforeEach(() => {
    startState = {
        posts: []
    }
});

test('received posts must be added', () => {

    const posts = [{id: 1}, {id: 2}]

    const action = setPosts(posts);

    const endState = postsReducer(startState, action);

    expect(startState.posts.length).toBe(0)
    expect(endState.posts.length).toBe(2)
    expect(endState.posts[1].id).toBe(2)

})