import React, {useEffect} from 'react';
import './App.css';
import { Stack } from '@fluentui/react';
import { DefaultButton, PrimaryButton } from '@fluentui/react/lib/Button';
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "./bll/store";
import {getPosts, PostType} from "./bll/posts-reducer";
import {PostsTable} from "./component/table/posts-table";

function App() {

    const dispatch = useDispatch();
    const posts = useSelector<RootStateType, Array<PostType>>(state => state.posts.posts)

    useEffect(() => {
        dispatch(getPosts())
    }, [])

    return (
        <div className="App">
            <Stack horizontal={true} horizontalAlign={"center"}>
                <DefaultButton>Yap</DefaultButton>
                <PrimaryButton>No yap</PrimaryButton>
            </Stack>
            <PostsTable posts={posts} />
            world hello
        </div>
    );
}

export default App;
