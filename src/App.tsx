import React, {useEffect} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "./bll/store";
import {getPosts, PostType} from "./bll/posts-reducer";
import {PostsTable} from "./component/table/posts-table";

function App() {

    const dispatch = useDispatch();
    const posts = useSelector<RootStateType, Array<PostType>>(state => state.posts.posts)

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])

    return (
        <div className="App">
            {posts.length !== 0 ? <PostsTable posts={posts} /> : 'hello'}
        </div>
    );
}

export default App;
